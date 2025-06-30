import { User, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import authSchema from "../schemas/auth.schema.js"; // Does nothing because no need to add pokemons
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class AuthController extends BaseController {
  constructor() {
    super(User, authSchema);
  }

  async register(req, res) {
    try {
      if (this.authSchema) {
        const { error } = this.authSchema.validate(req.body);
        if (error)
          return res.status(400).json({ error: error.details[0].message });

        const { username, password } = req.body;

        const existingUser = await User.findOne({ where: { username } });
        if (existingUser)
          return res.status(409).json({ error: "Username already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
          username: username,
          password: hashedPassword,
        });

        return res
          .status(201)
          .json({ message: "User created", userId: user.id });
      }
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ where: { username } });
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
export default new AuthController();
