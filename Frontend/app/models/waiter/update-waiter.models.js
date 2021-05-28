import { AxiosR } from "../Axios";
import { toaster } from "evergreen-ui";

import {UpdateWaiterAction} from "../../reducers/waiter.reducer"
const UpdateWaiter = (waiter, dispatch, router) => {
  if (waiter.name !== "") {
    AxiosR(router).put("waiter/put-waiter", {
      waiter: {
        id: waiter.id,
        name: waiter.name
      },
    })
      .then(() => 
      {
        dispatch(UpdateWaiterAction(waiter))
        toaster.success("Waiter modificado con exito")
      })
      .catch(() => toaster.danger("Waiter no modificado"));
  } else toaster.danger("Llene todos los campos");
};

module.exports = { UpdateWaiter };

