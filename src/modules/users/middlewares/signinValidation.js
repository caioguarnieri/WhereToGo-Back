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

    if (typeof field[key] !== expectedType) {
      throw new AppError({
        en: `${key} must be of the type ${expectedType}`,
      });
    }
  }
};

const signinValidation = (request, response, next) => {
  const { name, password } = request.body;

  handleEmptyFields({ name, password });
  handleTypesFields([
    { field: { name }, expectedType: "string" },
    { field: { password }, expectedType: "string" },
  ]);

  return next();
};

export default signinValidation;
