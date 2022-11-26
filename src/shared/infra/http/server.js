import "reflect-metadata";
import "dotenv/config";
import "express-async-errors";

import cors from "cors";
import routes from "./routes";
import express from "express";
import handleErrors from "./middlewares/handleErrors";

// Cria a conexão com o banco de dados;
import "../mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(handleErrors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}! 🌍`);
});
