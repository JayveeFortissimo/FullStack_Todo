import express from 'express';
import router from './routes/main.routes';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);


export default app;
