import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { AxiosR, AxiosW } from "../../../models/Axios";
import { toaster, Select } from "evergreen-ui";
const {
  Div,
  Input,
  Submit,
  SpanSubmit,
} = require("./styles/add-put-table.styles");

const { UpdateTable } = require("../../../models/tables/update-table.models");
const { NewTable } = require("../../../models/tables/new-table.models");
const { DeleteTables } = require("../../../models/tables/delete-table.models");
const AddPutTableController = ({ state, shown }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [table, setTable] = useState({
    name_table: "",
    count_chairs: 0,
    status: "",
    waiter: {},
  });

  const table_waiter = useSelector((store) => store.table.allArray);
  const restaurant = useSelector((store) => store.restaurant.active);
  const [waiter, setWaiter] = useState([]);

  useEffect(() => {
    // si es update-delete busca el id que se le pasa por la prop para inprimirlo en los input
    if (state.state === "update-delete") {
      table_waiter.map((data) => {
        if (data.id === state.id) {
          setTable(data);
        }
      });
    }
    AxiosR(router).get("waiter/all-waiter-table")
      .then(({ data }) => setWaiter(data))
      .catch(() => toaster.danger("No contiene ningun Waiter"));
  }, []);

  const handleOnChange = (data, camp) => {
    if (camp === "waiter") data = waiter.find((info) => info.id === data);
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
                await NewTable(table, restaurant, dispatch);
                // shown(false);
                break;
              case "update":
                UpdateTable(table, dispatch);
                // shown(false);
                break;
              case "delete":
                DeleteTables(table, dispatch);
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
            value={table.name_table}
            onChange={({ target }) =>
              handleOnChange(target.value, "name_table")
            }
            maxLength="50"
          />
          <label>Count Chairs:</label>
          <Input
            type="number"
            min={0}
            placeholder="Count Chairs"
            value={table.count_chairs}
            onChange={({ target }) =>
              handleOnChange(target.value, "count_chairs")
            }
          />
          <label>Status:</label>
          <Select
            width="100%"
            onChange={({ target }) => handleOnChange(target.value, "status")}
          >
            <option value="libre" selected={table.status === "libre"}>
              Libre
            </option>
            <option value="ocupado" selected={table.status === "ocupado"}>
              Ocupado
            </option>
          </Select>
          <label>Waiter:</label>
          <Select
            width="100%"
            onChange={({ target }) => handleOnChange(target.value, "waiter")}
          >
            {waiter && (
              <>
                <option selected>-- Selecione un waiter --</option>
                {waiter.map((data) => (
                  <option
                    key={`key of waiter: ${data.id}`}
                    value={data.id}
                    selected={table.waiter.id === data.id}
                  >
                    {data.name}
                  </option>
                ))}
              </>
            )}
          </Select>
          <SpanSubmit>
            {state.state === "new" && (
              <Submit
                type="submit"
                value="Agregar Table"
                name="new"
                background={"#DCF2EA"}
                color={"#429777"}
              />
            )}
            {state.state === "update-delete" && (
              <>
                <Submit
                  type="submit"
                  value="Modificar Table"
                  name="update"
                  background={"#EBF0FF"}
                  color={"#3366FF"}
                />
                <Submit
                  type="submit"
                  value="Eliminar Table"
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

module.exports = AddPutTableController;
