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

const handlePassword = (password) => {
  if (!/(?=.*[A-Z])/.test(password)) {
    throw new AppError({
      en: "Password must be at least one capital letter",
      ptbr: "A senha deve ter pelo menos uma letra maiúscula",
    });
  }

  if (!/^(?=.*[a-z])/.test(password)) {
    throw new AppError({
      en: "Password must be at least one lowercase letter",
      ptbr: "A senha deve ter pelo menos uma letra minúscula",
    });
  }

  if (!/(?=.*[0-9])/.test(password)) {
    throw new AppError({
      en: "Password must have at least one number",
      ptbr: "A senha deve ter pelo menos um número",
    });
  }

  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    throw new AppError({
      en: "Password must have at least one special character",
      ptbr: "A senha deve ter pelo menos um caractere especial",
    });
  }

  if (password.length < 8) {
    throw new AppError(
      {
        en: "Password must be at least 8 characters long",
        ptbr: "A senha deve ter pelo menos 8 caracteres",
      },
      411
    );
  }
};

const signupValidation = (request, response, next) => {
  const { name, email, password, nationality, active } = request.body;

  handleEmptyFields({ name, email, nationality, password });
  handleTypesFields([
    { field: { name }, expectedType: "string" },
    { field: { email }, expectedType: "string" },
    { field: { nationality }, expectedType: "string" },
    { field: { password }, expectedType: "string" },
    { field: { active }, expectedType: "boolean" },
  ]);
  handlePassword(password);

  return next();
};

export default signupValidation;
