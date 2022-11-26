import AppError from "../../../shared/errors";

class SigninService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, password }) {
    const user = await this.usersRepository
      .findOne({ name })
      .select("+password")
      .populate("travels");

    if (!user) {
      throw new AppError(
        {
          en: "User does not exist",
          ptbr: "Este usuário não existe",
        },
        404
      );
    }

    const passwordMatch = password === user.password;
    if (!passwordMatch) {
      throw new AppError(
        {
          en: "Incorrect password",
          ptbr: "Senha incorreta",
        },
        403
      );
    }

    user.password = undefined;

    return user;
  }
}

export default SigninService;
