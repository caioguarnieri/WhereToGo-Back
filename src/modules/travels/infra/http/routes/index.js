import { Router } from "express";
import idValidation from "../../../../../shared/infra/http/middlewares/idValidation";
import storeValidation from "../../../middlewares/storeValidation";
import updateValidation from "../../../middlewares/updateValidation";
import TravelsController from "../controllers/TravelsController";

const travelsRouter = Router();
const travelsController = new TravelsController();

travelsRouter.get("/", travelsController.index);
travelsRouter.get("/:id", idValidation, travelsController.show);
travelsRouter.post("/", storeValidation, travelsController.store);
travelsRouter.put(
  "/:id",
  idValidation,
  updateValidation,
  travelsController.update
);
travelsRouter.delete("/:id", idValidation, travelsController.delete);

export default travelsRouter;
