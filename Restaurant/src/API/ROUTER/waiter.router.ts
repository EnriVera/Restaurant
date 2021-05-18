const express = require("express");

const WaiterController = require("../CONTROLLER/waiter.controller");
import Session from "./session";

const router = express.Router();
const waiter = new WaiterController();

router.get(
  "/all-waiter",
//   (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any, next: any) => waiter.GetAllWaiter(req, res)
);

module.exports = router
