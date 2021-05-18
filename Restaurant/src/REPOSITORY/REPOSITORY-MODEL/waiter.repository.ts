import { waiter_json } from "../../MODEL/ENTITY/waiter-entity";
import { Waiter } from "../../MODEL/INTERFACE/waiter-interface";
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
class WaiterRepository implements Waiter {
  public async GetAllWaiter(): Promise<Array<waiter_json>> {
    return await new Promise(async(resolve, reject) => {
      const sqlTable = await sequelize.query(`
        SELECT
            ts.id, ts.name_table, ts.count_chairs, ts.status, ts.id_waiter
        FROM tables ts
            INNER JOIN waiter wa ON ts.id_waiter = wa.id;`);
      const sqlWaiter = await sequelize.query(`
        SELECT
            wai.id, wai.name, wai.number_mozo
        FROM waiter wai`);

      let jsonRES: Array<waiter_json> = [];
      if (sqlWaiter[1].rowCount > 1) {
        sqlWaiter[0].map((info: any) => {
          if (sqlTable[1].rowCount > 1) {
            const table = sqlTable[0].find(
              (data: any) => data.id_waiter === info.id
            );
            if (table) {
              jsonRES.push({
                ...info,
                tables: table,
              });
            }
            else jsonRES.push(info);
          } else {
            jsonRES.push(info);
          }
        });
      }
      resolve(jsonRES);
    });
  }
}

module.exports = WaiterRepository;
