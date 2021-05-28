import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Redirect from "../../models/redirect.model";
import { useDispatch, useSelector } from "react-redux";
//const Redirect = require("../../models/redirect.model");

// components
import NavComponents from "../../components/navbar/nav/nav.component";
const Table = require("../../components/table/table.components");
const Avatar = require("../../components/avatar/avatar.components");

//styles
const { Section, Article } = require("../../styles/dashboard/dashboard.styles");

//reducer
import { GetAllTablesAction } from "../../reducers/tables.reducer";

const DataHeader = ["Name", "Count Tables", "Count Waiters", "Waiters Working"];
const DataHeaderTable = ["Name", "Count Chairs", "Status", "Waiter"];
var status = 0;
var tablesInfo = [];
const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const restaurant = useSelector((store) => store.restaurant.array);
  const active = useSelector((store) => store.restaurant.active);
  const tables = useSelector((store) => store.table.allArray);
  const [arrayTable, setArrayTable] = useState([]);
  useEffect(() => {
    // Redirect(router);
    if (tables.length !== 0) {
      tables.map((data) => {
        tablesInfo.push({
          id: data.id,
          name_table: data.name_table,
          count_chairs: data.count_chairs,
          status: data.status,
          waiterName: <Avatar name={data.waiter.name} />
        });
      });
      setArrayTable(tablesInfo);
    }
    if (active.id !== undefined && status === 0) {
      ++status;
      dispatch(GetAllTablesAction(router));
    }
  }, [active, tables]);
  return (
    <>
      <NavComponents>
        <Section>
          <Article>
            <h1>Restaurant:</h1>
            <Table header={DataHeader} content={restaurant} />
          </Article>
          <Article>
          <h1>Tables:</h1>
            <Table header={DataHeaderTable} content={arrayTable}/>
          </Article>
        </Section>
      </NavComponents>
    </>
  );
};

module.exports = Dashboard;
// export default Dashboard
