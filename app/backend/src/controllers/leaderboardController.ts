import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';

export default class LeaderBoardController {
  public model: LeaderBoardService;

  constructor() {
    this.model = new LeaderBoardService();
  }

  public static async getLeaderBoardHome(_req: Request, res: Response) {
    const leaderBoard = await LeaderBoardService.getLeaderBoardHome();
    return res.status(200).json(leaderBoard);
  }
}
