import ITables from "../../MODEL/INTERFACE/tables-interface";
import { TablesRepository } from "../../REPOSITORY/REPOSITORY-MODEL/tables.repository";
import { tables } from "../../MODEL/ENTITY/tables-entity";

export default class TablesController {
  private tables: ITables = new TablesRepository();
  public async GetAllTables(req: any, res: any) {
    const tables = await this.tables
      .GetAllTables({ id_restaurant: req.query.restaurant })
      .catch(() => null);
    tables
      ? res.status(200).json({ tables: tables })
      : res.status(404).json({ message: "Id of restaurant invalit" });
  }

  public async PostTables(req: any, res: any) {
    const data: tables = req.body.table;
    const add = await this.tables
      .AddTables({
        name_table: data.name_table,
        count_chairs: data.count_chairs,
        id_restaurant: data.id_restaurant,
        id_waiter: data.id_waiter,
      })
      .catch(() => null);

    add
      ? res.status(200).json({ message: "Add Table" })
      : res.status(404).json({ message: "Not add table" });
  }

  public async PutTable(req: any, res: any) {
    console.log(req.body.table)
    const data: tables = req.body.table;
    const put = await this.tables
      .UpdateTables({
        id: data.id,
        name_table: data.name_table,
        count_chairs: data.count_chairs,
        status: data.status,
        id_waiter: data.id_waiter,
      })
      .catch(() => null);

    put
      ? res.status(200).json({ message: "Update Table" })
      : res.status(404).json({ message: "Not update table" });
  }

  public async DeleteTable(req: any, res: any) {
    const delet = await this.tables
      .DeleteTables({id: req.query.id_table})
      .catch(() => null);

    delet
      ? res.status(200).json({ message: "Delete Table" })
      : res.status(404).json({ message: "Not delete table" });
  }
}
