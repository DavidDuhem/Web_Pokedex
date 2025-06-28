import BaseServiceStore from "./BaseServiceStore.js";
import TeamService from "../services/TeamService.js";

const service = new TeamService();

class TeamStore extends BaseServiceStore {
  constructor() {
    super(service);
  }
}

export const teamStore = new TeamStore();
export const teams = teamStore.items;
export const teamLoading = teamStore.loading;
export const teamError = teamStore.error;
export const loadTeams = () => teamStore.loadAll();
