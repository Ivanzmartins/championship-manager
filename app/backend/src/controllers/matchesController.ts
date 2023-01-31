import { Request, Response } from 'express';
import MatchesService from '../services/matchesServices';

export default class MatchesController {
  public model: MatchesService;

  constructor() {
    this.model = new MatchesService();
  }

  public static async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    if (!inProgress) {
      const matches = await MatchesService.getAllMatches();
      return res.status(200).json(matches);
    }
    if (inProgress === 'true') {
      const matches = await MatchesService.getMatchesInProgress();
      console.log(matches.length);
      return res.status(200).json(matches);
    }
    if (inProgress === 'false') {
      const matches = await MatchesService.getMatchesFinished();
      console.log(matches.length);
      return res.status(200).json(matches);
    }
  }
}
