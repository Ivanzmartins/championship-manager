import { SignOptions } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

type TypeToken = {
  id?: string,
  username: string,
  vocation:string,
  level: number,
};

const secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const createToken = (payload: TypeToken) => jwt.sign(payload, secret, jwtConfig);

export const validateToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (err) {
    return null;
  }
};
