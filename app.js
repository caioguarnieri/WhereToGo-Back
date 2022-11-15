import express from "express";
import routes from "./src/routes.js";
import dataModel from "./model/dataModel.js";


class app {
  constructor() {
    
    this.server = express();
    this.middlewares();  
    this.Routes();
   
  }
  middlewares() {
    this.server.use(express.json());
  }
  Routes() {
    this.server.use(routes);
  }
}

export default new app().server;
