import BaseService from "./BaseService";

export default class TeamService extends BaseService {
  constructor(baseUrl) {
    super(baseUrl, "teams");
  }
}
