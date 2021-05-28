const express = require("express");

const WaiterController = require("../CONTROLLER/waiter.controller");
import { Session } from "./session";

const router = express.Router();
const waiter = new WaiterController();
router.get(
  "/all-waiter",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any, next: any) => waiter.GetAllWaiter(req, res)
);

router.post(
  "/new-waiter",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => waiter.PostWaiter(req, res)
);

router.put(
  "/put-waiter",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => waiter.PutWaiter(req, res)
);

router.delete(
  "/delete-waiter",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => waiter.DeleteWaiter(req, res)
);

module.exports = router;
