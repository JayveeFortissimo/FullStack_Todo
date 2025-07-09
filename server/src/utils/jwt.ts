import jwt from 'jsonwebtoken';
import env from 'dotenv';
env.config();

const JWT_SECRET = process.env.SECRETKEY as string;

   
export const generateToken = (userId: number) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '5h' });
};


export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};