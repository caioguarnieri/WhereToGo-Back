import AppError from "../../../errors";

const handleErrors = (error, request, response, next) => {
  console.log(error);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  return response.status(500).json({
    status: "error",
    message: {
      en: "Internal server error",
      ptbr: "Erro interno do servidor",
    },
  });
};

export default handleErrors;
