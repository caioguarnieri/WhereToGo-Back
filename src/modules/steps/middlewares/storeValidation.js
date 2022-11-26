import AppError from "../../../shared/errors";
import idIsValid from "../../../shared/utils/idValidTest";

const handleEmptyFields = (fields) => {
  const keys = Object.keys(fields);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!fields[key]) {
      throw new AppError({ en: `${key} is required` });
    }
  }
};

// O campo fields deve ser do formato: [{ param: value }, expectedType]

const handleTypesFields = (fields) => {
  for (let i = 0; i < fields.length; i++) {
    const { field, expectedType } = fields[i];
    const key = Object.keys(field)[0];

    if (!field[key] || typeof field[key] !== expectedType) {
      throw new AppError({
        en: `${key} must be of the type ${expectedType}`,
      });
    }
  }
};

const storeValidation = (request, response, next) => {
  const {
    travelId,
    destination,
    description,
    startDate,
    endDate,
    budget,
    status,
  } = request.body;

  handleEmptyFields({
    travelId,
    destination,
    description,
    startDate,
    endDate,
    budget,
    status,
  });
  handleTypesFields([
    { field: { travelId }, expectedType: "string" },
    { field: { destination }, expectedType: "string" },
    { field: { description }, expectedType: "string" },
    { field: { startDate }, expectedType: "string" },
    { field: { endDate }, expectedType: "string" },
    { field: { budget: Number(budget) }, expectedType: "number" },
    { field: { status }, expectedType: "string" },
  ]);

  if (!idIsValid(travelId)) {
    throw new AppError(
      {
        en: "id is invalid",
        ptbr: "Viagem não identificada",
      },
      422
    );
  }

  return next();
};

export default storeValidation;
