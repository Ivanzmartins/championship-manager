import { Request, Response, NextFunction } from 'express';

const verifyLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  return next();
};

export default verifyLogin;
