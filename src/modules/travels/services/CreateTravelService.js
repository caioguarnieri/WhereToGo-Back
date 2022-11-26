import AppError from "../../../shared/errors";
import User from "../../users/infra/mongoose/models/User";

class CreateTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute({ userId, title, description, startDate, endDate }) {
    const user = await User.findById(userId).populate("travels");
    if (!user) {
      throw new AppError(
        {
          en: "User not found",
          ptbr: "Usuário não encontrado",
        },
        404
      );
    }

    const travel = await this.travelsRepository.create({
      userId,
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      budget: 0,
    });

    user.travels = [...user.travels, travel];

    await user.save();

    return travel;
  }
}

export default CreateTravelService;
