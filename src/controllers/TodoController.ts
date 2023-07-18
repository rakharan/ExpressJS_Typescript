import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
  //Show all data
  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: TodoService = new TodoService(req)
      const todos = await service.getAll()
      let message = "";
      if (!todos.length) {
        message = "No Todo Found!";
      }

      return res.send({ data: todos, message });

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while fetching todos' });
    }

  }

  //Create one data
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: TodoService = new TodoService(req)
      const todo = await service.store()
      return res.send({
        data: todo,
        message: "Todo created!"
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while creating todos' });
    }
  }

  //Show one data
  show = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: TodoService = new TodoService(req)
      const todo = await service.getOne()
      return res.send({
        data: todo,
        message: ""
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while fetching a single todo' });
    }
  }

  //Update data
  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: TodoService = new TodoService(req)
      await service.update()

      return res.send({
        message: "Todo Updated!"
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while updating a single todo' });
    }
  }

  //Delete data
  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const service: TodoService = new TodoService(req)
      await service.delete()

      return res.send({
        message: "Todo Deleted!"
      })
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send({ error: 'An error occurred while deleting a single todo' });
    }
  }
}

export default new TodoController();
