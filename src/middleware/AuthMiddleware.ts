import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  const authorizationHeader = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET_KEY || "secret";

  if (!authorizationHeader) {
    return res.status(401).send("Unauthorized");
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const credential = jwt.verify(token, secretKey);

    if (credential) {
      req.app.locals.credential = credential;
      next();
    } else {
      return res.send("Token invalid");
    }
  } catch (error) {
    return res.send(error);
  }
};

