import AppError from "../../../errors";
import idIsValid from "../../../utils/idValidTest";

const idValidation = (request, response, next) => {
  const { id } = request.params;

  if (!id) {
    throw new AppError(
      {
        en: "id is required",
      },
      422
    );
  }

  if (!idIsValid(id)) {
    throw new AppError(
      {
        en: "id is invalid",
      },
      422
    );
  }

  return next();
};

export default idValidation;
