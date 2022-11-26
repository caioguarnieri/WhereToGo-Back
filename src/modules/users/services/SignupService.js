import AppError from "../../../shared/errors";

class SigninService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password, nationality, active }) {
    const userExists = await this.usersRepository.findOne({ name });
    if (userExists) {
      throw new AppError(
        {
          en: "User already registered",
          ptbr: "Usuário já cadastrado",
        },
        404
      );
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      nationality,
      active,
    });

    user.password = undefined;

    return user;
  }
}

export default SigninService;
