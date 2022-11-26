import { Router } from "express";
import signinValidation from "../../../middlewares/signinValidation";
import signupValidation from "../../../middlewares/signupValidation";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post("/signin", signinValidation, usersController.signin);
usersRouter.post("/signup", signupValidation, usersController.signup);

export default usersRouter;
