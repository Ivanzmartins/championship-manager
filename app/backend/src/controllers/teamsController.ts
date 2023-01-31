import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

export default class TeamsController {
  public model: TeamsService;

  constructor() {
    this.model = new TeamsService();
  }

  public static async getAllTeams(req: Request, res: Response) {
    const teams = await TeamsService.getAllTeams();
    return res.status(200).json(teams);
  }

  public static async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamsService.getTeamById(Number(id));
    return res.status(200).json(team);
  }
}
