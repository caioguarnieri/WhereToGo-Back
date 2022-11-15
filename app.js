import express from "express";
import routes from "./src/routes.js";
import dataModel from "./model/dataModel.js";
const usuario = [
  {
    name: "Caio",
    email: " teste@teste",
    nacionalidade: " Brazil",
    active: true,
  },
];

class app {
  constructor() {
    this.server = express();
    this.Routes();
    dataModel
      .create(usuario)
      .then(() => {
        console.log("criado com sucesso");
      })
      .catch((err) => {
        console.log(`Erro ao criar ${err}`);
      });
  }
  Routes() {
    this.server.use(routes);
  }
}

export default new app().server;
