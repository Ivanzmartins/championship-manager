import MatchesService from './matchesServices';
import Team from '../database/models/teamsModel';
import TeamStatistics from '../utils/teamStatistics';
// import { IStatMatch } from '../Interfaces/MatchType';

export default class LeaderBoardService {
  public model: Team;

  constructor() {
    this.model = new Team();
  }

  public static async getLeaderBoardHome() {
    const matches = await MatchesService.getMatchesFinished();
    console.log('matches', matches.length);

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
    const sortedTeams = teamStats.sort((a, b) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor);
    return sortedTeams;
  }
}
