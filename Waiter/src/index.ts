if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
import SequelizeInit from "./REPOSITORY/DTO/sequelize/sequelize-init";

//Routes
const tables_router = require('./API/ROUTER/tables.router')

// init
const PORT = process.env.PORT;
const app = express();

SequelizeInit();

//middelware
app.use(cors({ origin: process.env.ACSESS_URL, credentials: true }));
app.use(morgan("tiny"));
app.use(helmet());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/tables', tables_router)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});