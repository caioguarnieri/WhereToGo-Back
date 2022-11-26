import AppError from "../../../shared/errors";

class ShowTravelService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute({ id }) {
    const travel = await this.travelsRepository.findById(id).populate("steps");

    if (!travel) {
      throw new AppError(
        {
          en: "Travel not found",
          ptbr: "Viagem não encontrada",
        },
        404
      );
    }

    return travel;
  }
}

export default ShowTravelService;
