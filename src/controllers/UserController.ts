import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
  { id: 1, name: "Adi" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Cidi" },
  { id: 4, name: "Didi" },
];

class UserController implements IController {
  //Show all data
  index(req: Request, res: Response): Response {
    console.log("ini adalah index users");
    return res.send(data);
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
