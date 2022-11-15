import { Router } from "express";
import dataModel from "../model/dataModel.js";
const routes = new Router();
const usuario = [
  {
    name: "Caio",
    email: " teste@teste",
    nacionalidade: " Brazil",
    active: true,
  },
];

routes.get("/", (req, res) => {
  res.json({ status: "ok" });
});

routes.post("/create/user", (req, res) => {
  let { name, email, nacionalidade, active } = req.body;
  if ((name != "" && email != "" && nacionalidade != "", active != false)) {
    usuario[0] ={
    "name":name,
    "email":email,
    "nacionalidade":nacionalidade,
    "active":active
    }
    dataModel
      .create(usuario)
      .then(() => {
        res.json({ "status": "Usuario Criado com Sucesso" });
      })
      .catch((err) => {
        res.json({ "status": `${err}` });
      });
  } else {
    res.json({ "status": "Campos Obrigatorios" });
  }
});

export default routes;
