import express from "express";
import { getLinks, getGithubUsers } from "./services.js";

export const routes = express.Router();

const usersList = [
  "jayp-xgh",
  "brunofunnie",
  "deablofk",
  "iankyy",
  "pedropietro",
  "hsmiranda",
  "bloiseleo",
  "jaumdev1",
  "cafe-e-codigo",
  "djonatah",
  "JairAssisDev",
  "astahjmo",
  "AninhaPardini",
  "giomartinsdev",
  "Gus-fs",
  "lucas-koji",
  "joaofolle",
  "thassiadevilart",
  "carolinarigaudfelix",
  "Manuel-Antunes",
  "devhenrique22",
  "FernandoVicenteGodinho",
  "juniorx57",
  "CodeMoreira",
  "matheusvidaltenorio",
  "Wadsom",
  "nsaraiva",
];

routes.get("/api/content", async (_, res) => {
  try {
    const data = await getLinks(`${process.env.VITE_APP_BASEURL}`);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

routes.get("/api/github-users", async (_, res) => {
  try {
    const data = await getGithubUsers(usersList);

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
