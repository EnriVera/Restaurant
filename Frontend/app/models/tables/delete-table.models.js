import { AxiosW } from "../Axios";
import { toaster } from "evergreen-ui";

import {GetAllTablesAction} from "../../reducers/tables.reducer"
const DeleteTables = async (table, dispatch) => {
  AxiosW.delete(`tables/delete-table?id_table=${table.id}`)
    .then(() => {
      dispatch(GetAllTablesAction());
      toaster.success("Table eliminado con exito");
    })
    .catch(() => toaster.danger("Table no eliminado"));
};

module.exports = { DeleteTables };