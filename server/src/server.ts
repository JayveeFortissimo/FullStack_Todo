/// <reference path="./types/express.d.ts" />
import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`The ports working on ${PORT}`)
})