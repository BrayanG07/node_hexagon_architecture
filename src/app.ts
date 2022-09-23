import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoute from "./routes/user.router"
import dbInit from './db/mongo';

const app = express();
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();

app.listen(port, () => console.log(`Listo por el puerto ${port}`));


