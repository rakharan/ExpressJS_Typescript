import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");


class TodoController implements IController {
  //Show all data
  index = (req: Request, res: Response): Response => {
    return res.send("sukses")
  }

  //Create one data
  create(req: Request, res: Response): Response {
    return res.send("create sukses");
  }

  //Show one data
  show(req: Request, res: Response): Response {
    return res.send("test");
  }

  //Update data
  update(req: Request, res: Response): Response {
    return res.send("update sukses");
  }

  //Delete data
  delete(req: Request, res: Response): Response {
    return res.send("test");
  }
}

export default new TodoController();
