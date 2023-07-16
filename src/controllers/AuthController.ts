import { Request, Response } from "express";
const db = require("../db/models");
class AuthController {
  //Show all data
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    const createdUser = await db.user.create({ username, password });
    return res.send("Registration Success");
  };

  //Create one data
  login(req: Request, res: Response): Response {
    return res.send("Register");
  }
}

export default new AuthController();
