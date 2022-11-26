import { SigninService, SignupService } from "../../../services";
import User from "../../mongoose/models/User";

class UsersController {
  async signup(request, response) {
    const { name, email, password, nationality, active } = request.body;

    const signupUser = new SignupService(User);

    const user = await signupUser.execute({
      name,
      email,
      password,
      nationality,
      active,
    });

    return response.status(201).json(user);
  }

  async signin(request, response) {
    const { name, password } = request.body;

    const signinUser = new SigninService(User);

    const user = await signinUser.execute({
      name,
      password,
    });

    return response.status(200).json(user);
  }
}

export default UsersController;
