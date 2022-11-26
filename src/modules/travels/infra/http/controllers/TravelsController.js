import {
  CreateTravelService,
  DeleteTravelService,
  ListTravelsService,
  ShowTravelService,
  UpdateTravelService,
} from "../../../services";
import Travel from "../../mongoose/models/Travel";

class TravelsController {
  async index(request, response) {
    const listTravels = new ListTravelsService(Travel);

    const travels = await listTravels.execute();

    return response.status(200).json(travels);
  }
  async show(request, response) {
    const { id } = request.params;
    const showTravel = new ShowTravelService(Travel);

    const travel = await showTravel.execute({ id });

    return response.status(200).json(travel);
  }
  async store(request, response) {
    const { userId, title, description, startDate, endDate } = request.body;
    const createTravel = new CreateTravelService(Travel);

    const travel = await createTravel.execute({
      userId,
      title,
      description,
      startDate,
      endDate,
    });

    return response.status(201).json(travel);
  }

  async update(request, response) {
    const { id } = request.params;
    const { title, description, startDate, endDate } = request.body;
    const updateTravel = new UpdateTravelService(Travel);

    const travel = await updateTravel.execute({
      id,
      title,
      description,
      startDate,
      endDate,
    });

    return response.status(200).json(travel);
  }

  async delete(request, response) {
    const { id } = request.params;
    const deleteTravel = new DeleteTravelService(Travel);

    await deleteTravel.execute({ id });

    return response.status(204).json();
  }
}

export default TravelsController;
