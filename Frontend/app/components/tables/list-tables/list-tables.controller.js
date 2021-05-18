import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Avatar,
  Pill,
  SideSheet,
  Pane,
  Tablist,
  Tab,
  Button,
  EditIcon,
} from "evergreen-ui";
import { GetAllTablesAction } from "../../../reducers/tables.reducer";
import { AxiosW } from "../../../models/Axios";

const AddPutTableController = require("../../../components/tables/add-put/add-put-table.controller");

//styles
const { Div, SpanHeaderTable } = require("./styles/list-tables.styles");

const LitsTablesController = () => {
  const dispatch = useDispatch();
  const restaurantActive = useSelector((store) => store.restaurant.active);
  const tablesAll = useSelector((store) => store.table.allArray);

  const [isShown, setIsShown] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["Table", "Addition of table"]);

  const [state, setState] = useState({
    state: "",
    id: "",
  });

  useEffect(() => {
    if (restaurantActive.id !== undefined) {
      dispatch(GetAllTablesAction());
    }
  }, [restaurantActive]);
  return (
    <>
      <Div>
        <SpanHeaderTable>
          <h1>Lista de tables</h1>
          <Button
            width="10%"
            marginY={8}
            marginRight={12}
            iconBefore={EditIcon}
            onClick={() => {
              setIsShown(!isShown);
              setState({ state: "new", id: null });
            }}
          >
            New Table
          </Button>
        </SpanHeaderTable>
        {tablesAll.length > 0 && (
          <Table>
            <Table.Head style={{ background: "#fff" }}>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Name Tables
              </Table.TextHeaderCell>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Count Chairs
              </Table.TextHeaderCell>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Status
              </Table.TextHeaderCell>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Waiter
              </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={830}>
              {tablesAll.map((profile) => (
                <Table.Row
                  key={profile.id}
                  isSelectable
                  onSelect={() => {
                    setIsShown(!isShown);
                    setState({ state: "update-delete", id: profile.id });
                  }}
                >
                  <Table.TextCell textProps={{ size: 500 }}>
                    {profile.name_table}
                  </Table.TextCell>
                  <Table.TextCell textProps={{ size: 500 }}>
                    {profile.count_chairs}
                  </Table.TextCell>
                  <Table.TextCell>
                    {profile.status === "libre" && (
                      <Pill display="inline-flex" color="green">
                        {profile.status}
                      </Pill>
                    )}

                    {profile.status === "ocupado" && (
                      <Pill display="inline-flex" color="blue">
                        {profile.status}
                      </Pill>
                    )}
                  </Table.TextCell>
                  <Table.TextCell textProps={{ size: 500 }}>
                    <Avatar name={profile.waiter.name} size={30} />
                  </Table.TextCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}

        <SideSheet
          isShown={isShown}
          onCloseComplete={() => setIsShown(!isShown)}
        >
          <Pane height={120} padding={16}>
            <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
              {tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  onSelect={() => setSelectedIndex(index)}
                  isSelected={index === selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            <Pane padding={16} background="tint1" flex="1">
              <AddPutTableController state={state} shown={setIsShown} />
            </Pane>
          </Pane>
        </SideSheet>
      </Div>
    </>
  );
};

export default LitsTablesController;
