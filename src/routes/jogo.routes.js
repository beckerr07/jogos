import { jogoController } from "../controller/jogo.Controller.js"

jogosRouter.get("/", jogoController.getAll);
jogosRouter.getByid("/", jogoController.getByid);
jogosRouter.delete("/", jogoController.delete);
jogosRouter.patch("/", jogoController.patch);
jogosRouter.post("/", jogoController.post);
jogosRouter.put("/", jogoController.put);

