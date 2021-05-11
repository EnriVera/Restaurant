const express = require("express");

import RestaurantController from "../CONTROLLER/restaurant.controller";
import Session from "./session";

const router = express.Router();
const restaurant = new RestaurantController();

router.post(
  "/new-restaurant",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => restaurant.PostRestaurant(req, res)
);

router.get(
  "/all-restaurant",
  (req: any, res: any, next: any) => Session(req, res, next),
  (req: any, res: any) => restaurant.GetAllRestaurant(req, res)
);

router.put("/put-restaurant", (req: any, res: any) =>
  restaurant.PutRestaurant(req, res)
);

router.delete("/delete-restaurant", (req: any, res: any) =>
  restaurant.DeleteOneRestaurant(req, res)
);

module.exports = router;
