import express from "express";
import cors from "cors";
import { routes } from "./routes.js";

const app = express();
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Running on port ${port}`));
