import AppError from "../../../shared/errors";
import Travel from "../../travels/infra/mongoose/models/Travel";

class CreateStepService {
  constructor(stepsRepository) {
    this.stepsRepository = stepsRepository;
  }

  async execute({
    travelId,
    destination,
    description,
    startDate,
    endDate,
    budget,
    status,
    latitude,
    longitude,
  }) {
    const travel = await Travel.findById(travelId).populate("steps");
    if (!travel) {
      throw new AppError(
        {
          en: "Travel not found",
          ptbr: "Viagem não encontrada",
        },
        404
      );
    }

    const step = await this.stepsRepository.create({
      travelId,
      destination,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      budget,
      status,
      latitude,
      longitude,
    });

    travel.steps = [...travel.steps, step];
    travel.budget += step.budget;

    await travel.save();

    return step;
  }
}

export default CreateStepService;
