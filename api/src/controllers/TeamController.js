import { Team, sequelize } from "../models/index.js";
import BaseController from "./BaseController.js";
import teamchema from "../schemas/team.schema.js";

class TeamController extends BaseController {
  constructor() {
    super(Team, teamchema);
  }
}
export default new TeamController();
