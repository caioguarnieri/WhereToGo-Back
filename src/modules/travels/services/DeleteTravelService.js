import AppError from "../../../shared/errors";
import Step from "../../steps/infra/mongoose/models/Step";

class DeleteTravelService {
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

    for (let i = 0; i < travel.steps.length; i++) {
      const step = travel.steps[i];
      await Step.deleteOne(step.id);
    }

    await this.travelsRepository.findByIdAndDelete(id);
  }
}

export default DeleteTravelService;
