import { Profile, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import profileSchema from "../schemas/profile.schema.js";

export default class AuthController extends BaseController {
  constructor() {
    super(Profile, profileSchema);
  }
}
