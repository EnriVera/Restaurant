import { tables, tables_json } from "../ENTITY/tables-entity"
export default interface ITables {
    GetAllTables(table: tables): Promise<Array<tables_json>>
    GetAllTableForWaiter(idWaiter: string): Promise<Array<tables_json>>
    AddTables(table: tables): Promise<Boolean>
    UpdateTables(table: tables): Promise<Boolean>
    DeleteTables(table: tables): Promise<Boolean>
}