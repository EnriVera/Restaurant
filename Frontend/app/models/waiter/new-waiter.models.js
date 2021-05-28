import { AxiosR } from "../Axios";
import { toaster } from "evergreen-ui";

import {GetAllWiterAction} from "../../reducers/waiter.reducer"
const NewWaiter = async (waiter, restaurant, dispatch, router) => {
  if (table.name !== "") {
    await AxiosR(router).post("waiter/new-waiter", {
      waiter: {
        name: waiter.name,
        id_restaurant: restaurant.id,
      },
    })
      .then(() => 
      {
        dispatch(GetAllWiterAction());
        toaster.success("Waiter creado con exito")
      })
      .catch(() => toaster.danger("Waiter no creada"));
  } else toaster.danger("Llene todos los campos");
};

module.exports = { NewWaiter };
