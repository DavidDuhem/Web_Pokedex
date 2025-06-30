import { User, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import authSchema from "../schemas/auth.schema.js"; // Does nothing because no need to add pokemons

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
}
export default new AuthController();
