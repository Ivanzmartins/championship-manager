import * as bcrypt from 'bcryptjs';
import { createToken } from '../auth/jwt';
import User from '../database/models/userModel';

class UserService {
  public model: User;

  constructor() {
    this.model = new User();
  }

  public static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return { type: 'error', message: 'Incorrect email or password' };
    }
    const { dataValues } = user;
    const isValid = bcrypt.compareSync(password, dataValues.password);
    if (!isValid) {
      return { type: 'error', message: 'Incorrect email or password' };
    }
    const { password: _, ...rest } = dataValues;
    const token = createToken(rest);
    return { type: 200, message: token };
  }
}
export default UserService;
