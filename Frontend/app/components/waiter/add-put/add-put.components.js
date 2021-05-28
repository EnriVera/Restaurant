import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AxiosR, AxiosW } from "../../../models/Axios";
import { useRouter } from "next/router";
import { toaster, Select } from "evergreen-ui";
const {
  Div,
  Input,
  Submit,
  SpanSubmit,
} = require("./styles/add-put.styles");

const { UpdateWaiter } = require("../../../models/waiter/update-waiter.models");
const { NewWaiter } = require("../../../models/waiter/new-waiter.models");
const { DeleteWaiter } = require("../../../models/waiter/delete-waiter.models");
const AddPutWaiterController = ({ state, shown }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [waiter, setWaiter] = useState({});

  const restaurant = useSelector((store) => store.restaurant.active);
  const infoWaiter = useSelector((store) => store.waiter.active);

  useEffect(() => {
    if(infoWaiter) setWaiter(infoWaiter)
  }, []);

  const handleOnChange = (data, camp) => {
    setTable({
      ...table,
      [camp]: data,
    });
  };
  return (
    <>
      <Div>
        <form
          style={{ width: "100%" }}
          onSubmit={async (e) => {
            e.preventDefault();
            switch (e.target.ownerDocument.activeElement.name) {
              case "new":
                await NewWaiter(waiter, restaurant, dispatch, router);
                // shown(false);
                break;
              case "update":
                UpdateWaiter(waiter, dispatch, router);
                // shown(false);
                break;
              case "delete":
                DeleteWaiter(waiter, dispatch, router);
                // shown(false);
                break;
            }
          }}
        >
          <label>Nombre:</label>
          <Input
            type="text"
            placeholder="Nombre"
            required
            value={waiter.name}
            onChange={({ target }) =>
              handleOnChange(target.value, "name")
            }
            maxLength="50"
          />
          <label>Number Waiter:</label>
          <Input
            type="number"
            min={0}
            disabled = {state.state === "update-delete"}
            placeholder="Count Chairs"
            value={waiter.number_mozo}
            onChange={({ target }) =>
              handleOnChange(target.value, "number_mozo")
            }
          />
          <SpanSubmit>
            {state.state === "new" && (
              <Submit
                type="submit"
                value="Agregar Waiter"
                name="new"
                background={"#DCF2EA"}
                color={"#429777"}
              />
            )}
            {state.state === "update-delete" && (
              <>
                <Submit
                  type="submit"
                  value="Modificar Waiter"
                  name="update"
                  background={"#EBF0FF"}
                  color={"#3366FF"}
                />
                <Submit
                  type="submit"
                  value="Eliminar Waiter"
                  name="delete"
                  background={"#F9DADA"}
                  color={"#D14343"}
                />
              </>
            )}
          </SpanSubmit>
        </form>
      </Div>
    </>
  );
};

module.exports = AddPutWaiterController;
