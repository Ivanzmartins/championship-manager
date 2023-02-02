import IMatch, { IStatMatch } from '../Interfaces/MatchType';
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

  public static async getMatchesFinished(): Promise<IStatMatch[]> {
    const matches = await Match.findAll({
      where: { inProgress: false },
      include: [
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      ],
    }) as unknown as IStatMatch[];

    return matches;
    // .matches as unknown as IStatMatch[];
  }

  public static async createMatch(matchInfos: IMatch) {
    const { homeTeamId, awayTeamId } = matchInfos;
    if (homeTeamId === awayTeamId) {
      return { message: 'It is not possible to create a match with two equal teams', type: 422 };
    }
    const homeTeam = await Team.findByPk(homeTeamId);
    const awayTeam = await Team.findByPk(awayTeamId);
    if (!homeTeam || !awayTeam) {
      return { message: 'There is no team with such id!', type: 404 };
    }
    const match = await Match.create({ inProgress: true, ...matchInfos });
    return { newMatch: match, type: 201 };
  }

  public static async finishMatch(id: string) {
    Match.update({ inProgress: 'false' }, { where: { id } });
    return { message: 'Finished' };
  }

  static async updateMatch(id: string, homeTeamGoals: number, awayTeamGoals: number) {
    const [teste] = await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    if (teste === 0) return { message: 'There is no match with such id!' };
    return { message: 'Updated' };
  }

  public static async getMatchById(id: string) {
    const match = await Match.findByPk(id);
    return match;
  }
}
