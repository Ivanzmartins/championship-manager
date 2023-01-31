import Team from '../database/models/teamsModel';

export default class TeamsService {
  public model: Team;

  constructor() {
    this.model = new Team();
  }

  static async getAllTeams() {
    const teams = await Team.findAll();
    return teams;
  }
}
