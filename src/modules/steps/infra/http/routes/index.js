import { Router } from "express";
import idValidation from "../../../../../shared/infra/http/middlewares/idValidation";
import storeValidation from "../../../middlewares/storeValidation";
import updateValidation from "../../../middlewares/updateValidation";
import StepsController from "../controllers/StepsController";

const stepsRouter = Router();
const stepsController = new StepsController();

stepsRouter.get("/", stepsController.index);
stepsRouter.get("/:id", idValidation, stepsController.show);
stepsRouter.post("/", storeValidation, stepsController.store);
stepsRouter.put("/:id", idValidation, updateValidation, stepsController.update);
stepsRouter.delete("/:id", idValidation, stepsController.delete);

export default stepsRouter;
