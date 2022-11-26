import {
  CreateStepService,
  DeleteStepService,
  ListStepsService,
  SearchDestinationCoordinatesService,
  ShowStepService,
  UpdateStepService,
} from "../../../services";
import Step from "../../mongoose/models/Step";

class StepsController {
  async index(request, response) {
    const listSteps = new ListStepsService(Step);

    const steps = await listSteps.execute();

    return response.status(200).json(steps);
  }
  async show(request, response) {
    const { id } = request.params;
    const showStep = new ShowStepService(Step);

    const step = await showStep.execute({ id });

    return response.status(200).json(step);
  }

  async store(request, response) {
    const {
      travelId,
      destination,
      description,
      startDate,
      endDate,
      budget,
      status,
    } = request.body;
    const createStep = new CreateStepService(Step);

    const { latitude, longitude } =
      await SearchDestinationCoordinatesService.execute({
        destination,
      });

    const step = await createStep.execute({
      travelId,
      destination,
      description,
      startDate,
      endDate,
      budget,
      status,
      latitude,
      longitude,
    });

    return response.status(201).json(step);
  }

  async update(request, response) {
    const { id } = request.params;
    const { destination, description, startDate, endDate, budget, status } =
      request.body;
    const updateStep = new UpdateStepService(Step);

    const { latitude, longitude } =
      await SearchDestinationCoordinatesService.execute({
        destination,
      });

    const step = await updateStep.execute({
      id,
      destination,
      description,
      startDate,
      endDate,
      budget,
      status,
      latitude,
      longitude,
    });

    return response.status(200).json(step);
  }

  async delete(request, response) {
    const { id } = request.params;
    const deleteStep = new DeleteStepService(Step);

    await deleteStep.execute({ id });

    return response.status(204).json();
  }
}

export default StepsController;
