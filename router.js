import express from "express";
import { handleList, postHandleList } from "./controller";

const globalRouter = express.Router();

globalRouter.get("/", handleList);
globalRouter.post("/", postHandleList);

export default globalRouter;
