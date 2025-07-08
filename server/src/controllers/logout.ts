import { Request, RequestHandler, Response } from "express";

const logout: RequestHandler = async (req: Request, res: Response) => {
  res.clearCookie("TokenJV");
  // res.clearCookie('refreshToken');
  res.status(200).json({ message: "Logout successful" });
};





export { logout };
