import { Request, Response } from "express";
import PasswordHash from "../utils/PasswordHash";
const db = require("../db/models");

class AuthController {
  //Register
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword = await PasswordHash.hash(password);

    await db.user.create({ username, password: hashedPassword });
    return res.send("Registration Success");
  };
  //Login
  login(req: Request, res: Response): Response {
    return res.send("Register");
  }
}

export default new AuthController();
