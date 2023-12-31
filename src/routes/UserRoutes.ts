import BaseRoutes from "./BaseRouter";

//Controller
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("/", UserController.index);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  }
}

export default new UserRoutes().router;
