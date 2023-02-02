import MatchesService from './matchesServices';
import Team from '../database/models/teamsModel';
import TeamStatistics from '../utils/teamStatistics';
import { IStatMatch } from '../Interfaces/MatchType';
// import Match from '../database/models/matchesModel';

export default class LeaderBoardService {
  public model: Team;

  constructor() {
    this.model = new Team();
  }

  public static async getLeaderBoardHome() {
    const matches = await MatchesService.getMatchFinished() as IStatMatch[];
    const teams = await Team.findAll();
    const teamStats = teams.map((team) => {
      const teamStat = new TeamStatistics(team.teamName);
      matches.forEach((match) => {
        if (match.homeTeamId === team.id) {
          teamStat.addGame(match.homeTeamGoals, match.awayTeamGoals);
        }
      });
      return teamStat;
    });
    const sortedTeams = teamStats.sort((a, b) => b.totalPoints - a.totalPoints);
    return sortedTeams;
  }
}
