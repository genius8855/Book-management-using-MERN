import express from "express";
import dotenv from "dotenv";
import { PORT } from "./config/constants.js"
import { connect } from "mongoose";
import routes from "./routes/bookRoutes.js"
import cors from "cors";
import connectDB from "./config/db.js";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,'/frontend/dist')))

dotenv.config();
app.use(express.json());
connectDB();
app.use('/api',routes);


app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname,"/frontend/index.html"))
})

app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
})
