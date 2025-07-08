import { Request, Response, NextFunction } from "express";
import jtw from "jsonwebtoken";


const JWT_SECRET = process.env.SECRETKEY as string;

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.TokenJV;
  if (!token) {
    res.status(401).json({ error: "Unauthorized!" });
    return;
  }

  try {
    const decoded = jtw.verify(token, JWT_SECRET) as {id: number};
     console.log('Decoded2: ', decoded);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
    return;
  }
};

export { authentication };
