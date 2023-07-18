import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
import { compare } from "bcrypt";
const db = require("../db/models");

class AuthController {
  //Register
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword = await Authentication.passwordHash(password);

    await db.user.create({ username, password: hashedPassword });
    return res.send("Registration Success");
  };

  //Login
  login = async (req: Request, res: Response): Promise<Response> => {

    //cari data user by username
    let { username, password } = req.body
    const user = await db.user.findOne({
      where: { username }
    })

    //check password
    let compare = await Authentication.passwordCompare(password, user.password)

    // generate token
    if (compare) {
      let token = Authentication.generateToken(user.id, username)
      return res.send({
        token
      });
    }
    return res.send("Authentication failed")
  }

  //Profile
  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credential)
  }
}
export default new AuthController();
