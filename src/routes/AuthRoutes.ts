import BaseRoutes from "./BaseRouter";
//Controller
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", AuthController.register);
    this.router.post("/login", AuthController.login);
  }
}

export default new AuthRoutes().router;
