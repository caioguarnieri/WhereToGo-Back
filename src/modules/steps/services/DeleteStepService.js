import AppError from "../../../shared/errors";

class DeleteStepService {
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

    await this.stepsRepository.deleteOne(id);
  }
}

export default DeleteStepService;
