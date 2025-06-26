import { Request, Response, RequestHandler } from "express";
import prismaConnection from "../config/database";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

const login: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prismaConnection.userProfile.findUnique({
      where: {email},
    });

    if (!user) {
      res.json({ message: "Invalid Credentials" });
      return;
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      res.json({ message: "Password are not correct! XD" });
      return
    }

    const token = generateToken(user.id);

    res.cookie("TokenJV", token, { httpOnly: true, secure: false});
    res.status(200).json({ message: "Login Successfully", token: token });
  } catch (error) {
     res.status(500).json({ message: "Error login user", error });
    console.log(error);
  }
};

export default login;
