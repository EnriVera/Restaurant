import { AxiosW } from "../Axios";
import { toaster } from "evergreen-ui";

import {UpdateTablesAction} from "../../reducers/tables.reducer"
const UpdateTable = (table, dispatch) => {
  if (
    table.name_table !== "" &&
    table.count_chairs > 0 &&
    table.waiter.id !== ""
  ) {
    if(table.status === "") table.status = 'libre'
    
    AxiosW.put("tables/update-table", {
      table: {
        id: table.id,
        name_table: table.name_table,
        count_chairs: Number(table.count_chairs),
        status: table.status,
        id_waiter: table.waiter.id,
      },
    })
      .then(() => 
      {
        dispatch(UpdateTablesAction(table))
        toaster.success("Table modificado con exito")
      })
      .catch(() => toaster.danger("Table no modificado"));
  } else toaster.danger("Llene todos los campos");
};

module.exports = { UpdateTable };

