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
      return res.status(401).json({ message: user.message });
    }

    return res.status(200).json({ token: user.message });
  }

  static async validate(req: Request, res: Response) {
    const auth = req.headers.authorization as string;
    const { type, message } = await UserService.validate(auth);
    if (type !== null) {
      return res.status(401).json({ message });
    }
    return res.status(200).json({ role: message });
  }
}

export default UserController;
