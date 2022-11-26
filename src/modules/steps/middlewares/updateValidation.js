import AppError from "../../../shared/errors";

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

const updateValidation = (request, response, next) => {
  const { destination, description, startDate, endDate, budget, status } =
    request.body;

  handleEmptyFields({
    destination,
    description,
    startDate,
    endDate,
    budget,
    status,
  });
  handleTypesFields([
    { field: { destination }, expectedType: "string" },
    { field: { description }, expectedType: "string" },
    { field: { startDate }, expectedType: "string" },
    { field: { endDate }, expectedType: "string" },
    { field: { budget: Number(budget) }, expectedType: "number" },
    { field: { status }, expectedType: "string" },
  ]);

  if (!(startDate instanceof Date)) {
    throw new AppError({
      en: "startDate must be an instance of Date",
      ptbr: "A data inicial deve ser válida",
    });
  }

  if (!(endDate instanceof Date)) {
    throw new AppError({
      en: "endDate must be an instance of Date",
      ptbr: "A data final deve ser válida",
    });
  }

  return next();
};

export default updateValidation;
