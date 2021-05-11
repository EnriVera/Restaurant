const axios = require("axios");
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
const EventEmitter = require("events");
import {
  Restaurant,
  FullRestaurant,
} from "../../MODEL/ENTITY/restaurant-entity";
import { IRestaurant } from "../../MODEL/INTERFACE/restaurant-interface";

const queryGetAll = (id: string | undefined) => `
SELECT re.id,
    re.name,
    (
        SELECT COUNT(*)
        FROM tables ts
        WHERE ts.id_restaurant = re.id
    ) as count_tables,
    (
        SELECT COUNT(*)
        FROM waiter wa
        WHERE wa.id_restaurant = re.id
    ) as count_waiters,
    (
        SELECT COUNT(*)
        FROM waiter wai
        INNER JOIN tables tab ON tab.id_waiter = wai.id
        WHERE tab.id_restaurant = re.id and wai.id = tab.id_waiter
    ) as waiters_working
FROM restaurant re
WHERE re.id_owner = '${id}'
GROUP BY re.id,
    re.name;
`;

class RestaurantRepository implements IRestaurant {
  public NewRestaurant(restaurante: Restaurant) {
    const name = restaurante.name?.toLowerCase();
    return new Promise((resolve: any, rejects: any) => {
      const sql = sequelize.query(
        `SELECT * FROM restaurants WHERE name = ${name}`
      );

      if (sql[1].rowCount > 0) {
        resolve({
          status: false,
          message: { message: "Name fo the used restaurant" },
        });
      }

      sequelize
        .query(
          `INSERT INTO restaurants(name, id_owner) VALUES (${name}, ${restaurante.id_owner})`
        )
        .then(() => {
          resolve({
            status: true,
            message: { message: "Restaurant addend" },
          });
        })
        .catch(() => {
          resolve({
            status: false,
            message: { message: "Error the insert new restaurant" },
          });
        });
    });
  }

  public async GetAllRestaurant(restaurante: Restaurant): Promise<FullRestaurant | any> {
    return new Promise(async(resolve, rejects) => {
      const sql = await sequelize.query(queryGetAll(restaurante.id_owner));
      sql[1].rowCount > 0 ? resolve(sql[0]) : rejects("Not content restaurant");
    })
  }
}

export default RestaurantRepository;
