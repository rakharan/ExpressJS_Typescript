import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

let data: any[] = [
  { id: 1, name: "Adi" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Cidi" },
  { id: 4, name: "Didi" },
];

class UserController implements IController {
  //Show all data
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const users = await db.user.findAll({ attributes: ["id", "username", "password"] });
      return res.send(users);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while fetching users' });
    }
  }

  //Create one data
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });

    return res.send("create sukses");
  }

  //Show one data
  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);
    return res.send(person);
  }

  //Update data
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    person.name = name;

    return res.send("update sukses");
  }

  //Delete data
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let people = data.filter((item) => item.id != id);
    return res.send(people);
  }
}

export default new UserController();
