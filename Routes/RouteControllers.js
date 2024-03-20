import express from "express";
import {
  updateData,
  findData,
  insertData,
} from "../Controllers/UserControllers.js";
export const dataRoutes = express.Router();

dataRoutes.route("/data").post(insertData);
dataRoutes.route("/find/:id").get(findData);
dataRoutes.route("/update/:id").put(updateData);
