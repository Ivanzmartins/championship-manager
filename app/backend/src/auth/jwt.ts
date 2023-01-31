import { SignOptions, verify, sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

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

export const createToken = (payload: TypeToken) => sign(payload, secret, jwtConfig);

export const validateToken = (token: string) => {
  try {
    const decoded = verify(token, secret);

    return decoded;
  } catch (err) {
    return null;
  }
};

export const tokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    verify(authorization, secret) as TypeToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
