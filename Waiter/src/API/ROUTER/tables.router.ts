const express = require("express");

import TablesController from "../CONTROLLER/tables.controller";
import Session from "./session";

const router = express.Router();
const tables = new TablesController();

router.get(
  "/all-tables",
//   (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => tables.GetAllTables(req, res)
);

router.post(
  "/new-table",
//   (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => tables.PostTables(req, res)
);


router.put(
  "/update-table",
//   (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => tables.PutTable(req, res)
);


router.delete(
  "/delete-table",
//   (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => tables.DeleteTable(req, res)
);


module.exports = router;
