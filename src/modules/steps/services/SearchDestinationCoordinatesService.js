import AppError from "../../../shared/errors";

class SearchDestinationCoordinatesService {
  static async execute({ destination }) {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/city?name=${destination}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY,
        },
      }
    );

    const data = await response.json();

    if (!data.length) {
      throw new AppError({
        en: "Destination coordinates not found",
        ptbr: "Coordenadas do destino não encontrada",
      });
    }

    return data[0];
  }
}

export default SearchDestinationCoordinatesService;
