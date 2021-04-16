if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
import SequelizeInit from "./REPOSITORY/DTO/sequelize/sequelize-init";

// init
const PORT = process.env.PORT;
const app = express();

SequelizeInit();

//middelware
app.use(morgan("tiny"));
app.use(helmet());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});