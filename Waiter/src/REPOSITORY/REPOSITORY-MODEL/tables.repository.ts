import { tables, tables_json } from "../../MODEL/ENTITY/tables-entity";
import ITables from "../../MODEL/INTERFACE/tables-interface";
const { sequelize } = require("../../REPOSITORY/DTO/sequelize/sequelize");
export class TablesRepository implements ITables {
  public async AddTables(table: tables): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize.query(`
        INSERT INTO tables(id, name_table, count_chairs, id_restaurant, id_waiter)
        VALUES (
          uuid_generate_v4(),
          '${table.name_table}',
          ${table.count_chairs},
          '${table.id_restaurant}',
          '${table.id_waiter}'
        );
      `)
      .then(() => resolve(true))
      .catch(() => reject(null));
    });
  }
  public async UpdateTables(table: tables): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize.query(`
        UPDATE tables 
        SET name_table = '${table.name_table}', 
        count_chairs = ${table.count_chairs},
        status = '${table.status}',
        id_waiter = '${table.id_waiter}'
        WHERE id = '${table.id}'
      `)
      .then(() => resolve(true))
      .catch(() => reject(null));
    });
  }
  public async DeleteTables(table: tables): Promise<Boolean> {
    return await new Promise(async (resolve, reject) => {
      await sequelize.query(`
        DELETE FROM tables
        WHERE id = '${table.id}';
      `)
      .then(() => resolve(true))
      .catch(() => reject(null));
    });
  }
  public async GetAllTables(table: tables): Promise<Array<tables_json>> {
    return await new Promise(async (resolve, reject) => {
      const sql = await sequelize
        .query(
          `
        SELECT ts.id as id_table, ts.*, wa.*
        FROM tables ts
            INNER JOIN waiter wa ON ts.id_waiter = wa.id
        WHERE ts.id_restaurant = '${table.id_restaurant}';`
        )
        .catch(() => reject(null));
      if (sql[1].rowCount > 1) {
        let arrayTables: Array<any> = [];
        sql[0].map((data: any) => {
          const table: tables_json = {
            id: data.id_table,
            name_table: data.name_table,
            count_chairs: data.count_chairs,
            status: data.status,
            waiter: {
              id: data.id_waiter,
              name: data.name,
              number_mozo: data.number_mozo,
            },
          };

          arrayTables.push(table);
        });
        resolve(arrayTables);
      }
      else reject(null)
    });
  }
}
