import express from "express";
import dotenv from "dotenv";
import { PORT } from "./config/constants.js"
import { connect } from "mongoose";
import routes from "./routes/bookRoutes.js"
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
connectDB();
app.use('/',routes);


app.get('/', (req, res) => {
    res.send("Hey Sahil!");
})

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})
