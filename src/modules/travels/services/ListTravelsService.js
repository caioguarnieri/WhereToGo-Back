class ListTravelsService {
  constructor(travelsRepository) {
    this.travelsRepository = travelsRepository;
  }

  async execute() {
    const travels = await this.travelsRepository.find();
    return travels;
  }
}

export default ListTravelsService;
