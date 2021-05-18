import { AxiosW } from "../Axios";
import { toaster } from "evergreen-ui";

import {GetAllTablesAction} from "../../reducers/tables.reducer"
const NewTable = async (table, restaurant, dispatch) => {
  console.log(table)
  if (
    table.name_table !== "" &&
    table.count_chairs > 0 &&
    table.waiter.id !== undefined
  ) {
    await AxiosW.post("/tables/new-table", {
      table: {
        name_table: table.name_table,
        count_chairs: table.count_chairs,
        id_restaurant: restaurant.id,
        id_waiter: table.waiter.id,
      },
    })
      .then(() => 
      {
        dispatch(GetAllTablesAction());
        toaster.success("Table creado con exito")
      })
      .catch(() => toaster.danger("Table no creada"));
  } else toaster.danger("Llene todos los campos");
};

module.exports = { NewTable };
