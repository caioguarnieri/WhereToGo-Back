import Travel from "../../travels/infra/mongoose/models/Travel";

class UpdateStepService {
  constructor(stepsRepository) {
    this.stepsRepository = stepsRepository;
  }

  async execute({
    id,
    destination,
    description,
    startDate,
    endDate,
    budget,
    status,
    latitude,
    longitude,
  }) {
    const step = await this.stepsRepository.findById(id);
    if (!step) {
      throw new AppError(
        {
          en: "step not found",
          ptbr: "Parada não encontrada",
        },
        404
      );
    }

    const updatedstep = await this.stepsRepository.updateOne({
      destination,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      budget,
      status,
      latitude,
      longitude,
      updatedAt: new Date(),
    });

    const travel = await Travel.findById(step.travelId).populate("steps");
    travel.steps = travel.steps.map((step) => {
      if (step.id === id) {
        step = updatedstep;
      }
    });

    await travel.save();

    return updatedstep;
  }
}

export default UpdateStepService;
