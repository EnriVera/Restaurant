if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const passport = require('passport')
const helmet = require("helmet");
const cookieSession = require('cookie-session')
const cors = require('cors')
import SequelizeInit from "./REPOSITORY/DTO/sequelize/sequelize-init";
// import rutes
const owner_router = require("./API/ROUTER/owner-router");

// init
const PORT = process.env.PORT;
const app = express();
SequelizeInit();

// config cors
var whitelist = [process.env.ACSESS_URL]
var corsOptionsDelegate = function (req: any, callback: any) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

//middelware
app.use(cookieSession({
    name: 'restaurant-session',
    keys: ['key1', 'key2']
  }))
app.use(morgan("tiny"));
app.use(helmet());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(passport.initialize())
app.use(passport.session());
// rutes
app.use('/owner', cors(corsOptionsDelegate), owner_router);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});