import { SignOptions } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';

type TypeToken = {
  id?: string,
  username: string,
  vocation:string,
  level: number,
};

const secret = process.env.JWT || 'secret';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

export const createToken = (payload: TypeToken) => jwt.sign(payload, secret, jwtConfig);

export const validateToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch {
    return false;
  }
};
