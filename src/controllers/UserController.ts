import { Request, Response } from "express";
import IController from "./ControllerInterface";
import UserService from "../services/UserService";
const db = require("../db/models");

class UserController implements Omit<IController, 'create'> {
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

  //Show one data
  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: UserService = new UserService(req)
      const user = await service.getOne()
      return res.send({
        data: user,
        message: ""
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while fetching a single user' });
    }
  }

  //Update data
  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: UserService = new UserService(req)
      await service.update()

      return res.send({
        message: "User updated!"
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while updating a single user' });
    }
  }

  //Delete data
  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: UserService = new UserService(req)
      await service.delete()

      return res.send({
        message: "User deleted!"
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while deleting a single user' });
    }
  }
}

export default new UserController();
