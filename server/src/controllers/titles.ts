import { Request, Response, RequestHandler } from "express";
import prismaConnection from "../config/database";
import { TitleConfiguration } from "../interface/titles.interface.dto";

const titleCreate: RequestHandler = async (req: Request, res: Response) => {
  const { title, description, startDate, userId } = req.body;

  const allData: TitleConfiguration = {
    title,
    description,
    startDate: new Date(startDate),
    userId,
  };

  try {
    await prismaConnection.todo_title.create({
      data: allData,
    });

    res.json({ message: "Title Successfully Added!" });
  } catch (error) {
    console.log(error);
  }
};

const gettitles: RequestHandler = async (req: Request, res: Response) => {
  const id = +req.params;

  try {
    const gettitle = await prismaConnection.todo_title.findUnique({
      where: {
        titleId: id,
      },
    });

    res.json({ message: "Successfully Get!", data: gettitle });
  } catch (error) {
    console.log(error);
  }
};

export { titleCreate, gettitles };
