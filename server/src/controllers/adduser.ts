import { Request, Response, RequestHandler } from "express";
import bcrypt from "bcrypt";
import { user } from "../interface/user.interface.dto";
import prismaConnection from "../config/database";

const saltRounds = 10;

const addUser: RequestHandler = async (req: Request, res: Response) => {
  const { name, email, age, address, startDate, password, picture } = req.body;

  const passwordHashed = await bcrypt.hash(password, saltRounds);
  const userData: user = {
    name,
    email,
    age,
    address,
    startDate: new Date(startDate),
    password: passwordHashed,
    picture
  };

  try {
    const findSomeone = await prismaConnection.userProfile.findMany();

    const isExist = findSomeone.some((pro) => pro.name === name);

    if (isExist) {
      res.json({ message: "User already Exists" });
      return;
    }

    const newUser = await prismaConnection.userProfile.create({
      data: userData,
    });

    res.json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error('asdasd: ', error);
    res.status(500).json({ message: "Error registering user", error });
  }
};

export default addUser;
