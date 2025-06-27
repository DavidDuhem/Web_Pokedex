import { Team, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";

class TeamController extends BaseController {
  constructor() {
    super(Team);
  }
}
export default new TeamController();
