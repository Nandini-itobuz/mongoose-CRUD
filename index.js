import express from 'express';
import mongoose from 'mongoose';
import  {dataRoutes } from './Routes/RouteControllers.js';


mongoose.connect('mongodb://localhost:27017');


const app = express();
app.use(express.json())
app.use(dataRoutes);

const port = 9000;

app.listen(port,()=>{
    console.log("Listing to server...")
})