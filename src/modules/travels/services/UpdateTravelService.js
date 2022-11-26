import User from "../../users/infra/mongoose/models/User";

class UpdateTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute({ id, title, description, startDate, endDate }) {
    const travel = await this.travelsRepository.findById(id);
    if (!travel) {
      throw new AppError(
        {
          en: "Travel not found",
          ptbr: "Viagem não encontrada",
        },
        404
      );
    }

    const updatedTravel = await this.travelsRepository.updateOne({
      title,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      updatedAt: new Date(),
    });

    const user = await User.findById(travel.userId).populate("travels");
    user.travels = user.travels.map((travel) => {
      if (travel.id === id) {
        travel = updatedTravel;
      }
    });

    await user.save();

    return updatedTravel;
  }
}

export default UpdateTravelService;
