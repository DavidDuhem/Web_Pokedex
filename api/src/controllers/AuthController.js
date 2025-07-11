import { Auth, Profile, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import authSchema from "../schemas/auth.schema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default class AuthController extends BaseController {
  constructor() {
    super(Auth, authSchema);
  }

  async register(req, res) {
    console.log("1");
    try {
      if (this.schema) {
        console.log("2");
        const { error } = this.schema.validate(req.body);
        if (error)
          return res.status(400).json({ error: error.details[0].message });

        console.log("3");
        const { email, username, password } = req.body;

        const existingAuth = await Auth.findOne({ where: { email } });
        if (existingAuth)
          return res.status(409).json({ error: "Email already exists" });

        console.log("4");
        const hashedPassword = await bcrypt.hash(password, 10);

        const auth = await Auth.create({
          email: email,
          password: hashedPassword,
        });

        await Profile.create({
          username: username,
          auth_id: auth.id,
        });

        console.log("5");
        return res.status(201).json({
          message: "Account created successfully",
        });
      }
      return res.status(500).json({
        error: "Internal server error (validation issue)",
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const auth = await Auth.findOne({ where: { email } });
      if (!auth) return res.status(401).json({ error: "Invalid credentials" });

      const match = await bcrypt.compare(password, auth.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      const profile = await Profile.findOne({ where: { auth_id: auth.id } });

      const token = jwt.sign(
        { id: auth.id, profile_id: profile.id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.json({
        message: "Logged in",
        token,
        profile: {
          id: profile.id,
        },
      });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
