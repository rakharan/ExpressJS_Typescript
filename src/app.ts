import express, { Response, Request, NextFunction, Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import { config as dotenv } from "dotenv";

//Routes
import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response): void => {
      res.send("Hello world");
    });

    this.app.use("/api/v1/users", UserRoutes);
    this.app.use("/api/v1/auth", AuthRoutes);
  }
}

const port: number = 3000;
const app = new App().app;
app.listen(port, () => {
  console.log("App is running on " + port);
  console.log(process.env.DB_HOST);
});
