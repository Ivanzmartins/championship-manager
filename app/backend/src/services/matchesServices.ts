import IMatch from '../Interfaces/MatchType';
import Match from '../database/models/matchesModel';
import Team from '../database/models/teamsModel';

export default class MatchesService {
  public model: Match;

  constructor() {
    this.model = new Match();
  }

  public static async getAllMatches() {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public static async getMatchesInProgress() {
    const matches = await Match.findAll({
      where: { inProgress: true },
      include: [
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  public static async getMatchesFinished() {
    const matches = await Match.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  }

  public static async createMatch(matchInfos: IMatch) {
    const match = await Match.create({ inProgress: true, ...matchInfos });
    return match;
  }

  public static async updateMatch(id: string) {
    Match.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }
}
