import { waiter_json, Waiter } from "../../MODEL/ENTITY/waiter-entity";
import { IWaiter } from "../../MODEL/INTERFACE/waiter-interface";
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
class WaiterRepository implements IWaiter {
  public async GetAllWaiter(waiter: Waiter): Promise<Array<waiter_json>> {
    return await new Promise(async (resolve, reject) => {
      const sql = await sequelize
        .query(
          `
          SELECT wa.*, COUNT(ts.*) as count_tables
          FROM waiter wa
              INNER JOIN tables ts ON ts.id_waiter = wa.id
          WHERE wa.id_restaurant = '${waiter.id_restaurant}'
          GROUP BY wa.id;
          `
        )
        .catch(() => reject(null));
      if (sql[1].rowCount > 1) {
        let arrayWaiter: Array<any> = [];
        sql[0].map((data: Waiter) => {
          const waiter: Waiter = {
            id: data.id,
            name: data.name,
            number_mozo: data.number_mozo,
            count_tables: data.count_tables
          };

          arrayWaiter.push(waiter);
        });
        resolve(arrayWaiter);
      }
      else reject(null)
    });
  }

  public async AddWaiter(waiter: Waiter): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize
        .query(
          `
        INSERT INTO waiter(id, name, number_mozo, id_restaurant)
        VALUES (
          uuid_generate_v4(),
          '${waiter.name}',
          ${Math.floor(100 + Math.random() * 900000)},
          '${waiter.id_restaurant}'
        );
      `
        )
        .then(() => resolve(true))
        .catch(() => reject(null));
    });
  }
  public async UpdateWaiter(waiter: Waiter): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize
        .query(
          `
        UPDATE waiter 
        SET name = '${waiter.name}', 
        WHERE id = '${waiter.id}'
      `
        )
        .then(() => resolve(true))
        .catch(() => reject(null));
    });
  }
  public async DeleteWaiter(waiter: Waiter): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize
        .query(
          `
        DELETE FROM waiter
        WHERE id = '${waiter.id}';
      `
        )
        .then(() => resolve(true))
        .catch(() => reject(null));
    });
  }
}

module.exports = WaiterRepository;