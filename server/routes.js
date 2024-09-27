import express from "express";
import { getLinks, getGithubUsers } from "./services.js";
import { usersList } from "./usersData.js";

export const routes = express.Router();

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
