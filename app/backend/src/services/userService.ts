import * as bcrypt from 'bcryptjs';
import { JwtPayload } from 'jsonwebtoken';// jwtpayload is an interface from jsonwebtoken that has a data property
import { createToken, validateToken } from '../auth/jwt';
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

  static async validate(token: string) {
    const valid = validateToken(token) as JwtPayload;
    if (!valid) {
      return { type: 'error', message: 'invalid token' };
    }
    return { type: null, message: valid.role };
  }
}
export default UserService;
