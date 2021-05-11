if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
// const passport = require('passport')
const helmet = require("helmet");
// const cookieSession = require('cookie-session')
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const cors = require("cors");
import SequelizeInit from "./REPOSITORY/DTO/sequelize/sequelize-init";
// import rutes
const owner_router = require("./API/ROUTER/owner-router");
const restaurant_router = require("./API/ROUTER/restaurant.router");
// init
const PORT = process.env.PORT;
const app = express();
SequelizeInit();

// config cors
app.use(cors({ origin: process.env.ACSESS_URL, credentials: true }));

//middelware
app.use(
  session({
    name: "restaurantSession",
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      // sameSite: true,
      // secure: process.env.NODE_ENV == 'production'
    },
  })
);

app.use(morgan("tiny"));
app.use(helmet());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
// app.use(passport.initialize())
// app.use(passport.session());

// rutes
app.use("/owner", owner_router);
app.use("/restaurant", restaurant_router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://192.168.0.9:${PORT}`);
});
