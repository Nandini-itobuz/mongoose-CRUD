import express from "express";
import { dataRoutes } from "./Routes/RouteControllers.js";
import {connectDb} from './Connect.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(dataRoutes);

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

