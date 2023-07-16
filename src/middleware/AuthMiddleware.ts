import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  let auth = false;
  if (auth) {
    next();
  } else {
    return res.send("Unauthorized");
  }
};
