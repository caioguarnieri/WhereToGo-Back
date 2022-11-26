class ListStepsService {
  constructor(stepsRepository) {
    this.stepsRepository = stepsRepository;
  }

  async execute() {
    const steps = await this.stepsRepository.find();
    return steps;
  }
}

export default ListStepsService;
