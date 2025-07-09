import { Request, Response, RequestHandler } from "express";
import prismaConnection from "../config/database";

const sideValue: RequestHandler = async (req: Request, res: Response) => {
  const id = req.user as { id: number };
  try {
    const allData = await prismaConnection.todo_title.findMany({
        where:{userId:id.id}
    })

    if(!allData){
        res.json({message: "no data"});
        throw new Error("Cannot find user!")
    }

    res.status(200).json(allData);
    
  } catch (error) {
    console.log(error);
  }
};

export {sideValue};
