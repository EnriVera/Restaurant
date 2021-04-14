if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const passport = require('passport')
import SequelizeInit from "./REPOSITORY/DTO/sequelize/sequelize-init";
// import rutes
const owner_router = require("./API/ROUTER/owner-router");

// init
const PORT = process.env.PORT;
const app = express();
SequelizeInit();

//middelware
app.use(morgan("tiny"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(passport.initialize())
app.use(passport.session());
// rutes
app.use('/owner', owner_router);
app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});