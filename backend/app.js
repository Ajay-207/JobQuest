import express from "express";
import dotenve from 'dotenv';
import cors from 'cors'
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";



const app = express();

dotenve.config({path: "./config/config.env"});


app.use(
    cors({
    origin: [process.env.FORNTEND_URL],
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
})
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/ '
}))


app.use('/api/v1/user', userRouter);
app.use('/api/v1/application', applicationRouter);
app.use('/api/v1/job', jobRouter);

dbConnection();


app.use(errorMiddleware)


export default app;