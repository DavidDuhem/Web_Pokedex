import { Auth, sequelize } from "../models/index.js";
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
        const { username, password } = req.body;

        const existingUser = await Auth.findOne({ where: { username } });
        if (existingUser)
          return res.status(409).json({ error: "Username already exists" });

        console.log("4");
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await Auth.create({
          username: username,
          password: hashedPassword,
        });

        console.log("5");
        return res
          .status(201)
          .json({ message: "User created", userId: user.id });
      }
      return res
        .status(500)
        .json({ error: "Internal server error (validation issue)" });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await Auth.findOne({ where: { username } });
      if (!user) return res.status(401).json({ error: "Invalid credentials" });

      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.json({ message: "Logged in", token });
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
