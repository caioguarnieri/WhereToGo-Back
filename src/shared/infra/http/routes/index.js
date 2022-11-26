import { Router } from "express";
import stepsRouter from "../../../../modules/steps/infra/http/routes";
import travelsRouter from "../../../../modules/travels/infra/http/routes";
import usersRouter from "../../../../modules/users/infra/http/routes";

const routes = Router();

routes.use("/auth", usersRouter);
routes.use("/travels", travelsRouter);
routes.use("/steps", stepsRouter);

export default routes;
