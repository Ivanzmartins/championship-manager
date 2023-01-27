import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  public model: UserService;

  constructor() {
    this.model = new UserService();
  }

  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserService.login(email, password);
    if (user.type === 'error') {
      return res.status(401).json(user.message);
    }
    return res.status(200).json(user.message);
  }
}

export default UserController;
