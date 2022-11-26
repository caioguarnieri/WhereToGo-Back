import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const createConnection = async () => {
  await mongoose.connect(MONGODB_URL, (error) => {
    if (error) {
      return console.log(`Erro: ${error}`);
    }

    return console.log("Conexão ao banco de dados realizada com sucesso!");
  });
};

createConnection();
