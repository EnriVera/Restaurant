import { AxiosR } from "../Axios";
import { toaster } from "evergreen-ui";

import {DeleteWiterAction} from "../../reducers/waiter.reducer"
const DeleteWaiter = async (waiter, dispatch, router) => {
  AxiosR(router).delete(`waiter/delete-waiter?id_waiter=${waiter.id}`)
    .then(() => {
      dispatch(DeleteWiterAction(waiter));
      toaster.success("Waiter eliminado con exito");
    })
    .catch(() => toaster.danger("Waiter no eliminado"));
};

module.exports = { DeleteWaiter };

