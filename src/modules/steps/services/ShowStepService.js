import AppError from "../../../shared/errors";

class ShowStepService {
  constructor(stepsRepository) {
    this.stepsRepository = stepsRepository;
  }

  async execute({ id }) {
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

    return step;
  }
}

export default ShowStepService;
