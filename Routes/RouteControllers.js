import express from "express";
import {updateData,findData, insertData } from '../Controllers/UserControllers.js'
export const dataRoutes = express.Router();

dataRoutes.route('/data').post(insertData);
dataRoutes.route('/:id').get(findData).put(updateData);