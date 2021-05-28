import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { GetAllWiterAction, ActiveWaiter } from "../../../reducers/waiter.reducer";

const AddPutWaiterController = require("../../waiter/add-put/add-put.components");

//styles
const { Div, SpanHeaderTable } = require("./styles/list-waiter.styles");

const ListWaiterComponents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const restaurantActive = useSelector((store) => store.restaurant.active);
  const waiterAll = useSelector((store) => store.waiter.allArray);

  const [isShown, setIsShown] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["Waiter", "Tables of Waiter"]);

  const [state, setState] = useState({
    state: "",
    id: "",
  });

  useEffect(() => {
    if (restaurantActive.id !== undefined) {
      dispatch(GetAllWiterAction(router));
    }
  }, [restaurantActive]);
  return (
    <>
      <Div>
        <SpanHeaderTable>
          <h1>Lista de Waiter</h1>
          <Button
            width="10%"
            marginY={8}
            marginRight={12}
            iconBefore={EditIcon}
            onClick={() => {
              setIsShown(!isShown);
              dispatch(ActiveWaiter(null, router))
              setState({ state: "new" });
            }}
          >
            New Waiter
          </Button>
        </SpanHeaderTable>
        {waiterAll.length > 0 && (
          <Table>
            <Table.Head style={{ background: "#fff" }}>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Name Tables
              </Table.TextHeaderCell>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Number Waiter
              </Table.TextHeaderCell>
              <Table.TextHeaderCell textProps={{ size: 600 }}>
                Count Tables
              </Table.TextHeaderCell>
            </Table.Head>
            <Table.Body height={830}>
              {waiterAll.map((profile) => (
                <Table.Row
                  key={profile.id}
                  isSelectable
                  onSelect={() => {
                    setIsShown(!isShown);
                    dispatch(ActiveWaiter(profile, router))
                    setState({ state: "update-delete" });
                  }}
                >
                  <Table.TextCell textProps={{ size: 500 }}>
                    <Avatar name={profile.name} size={30} />
                  </Table.TextCell>
                  <Table.TextCell textProps={{ size: 500 }}>
                    {profile.number_mozo}
                  </Table.TextCell>
                  <Table.TextCell>
                    <Pill display="inline-flex" color="blue">{profile.count_tables}</Pill>
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
              <AddPutWaiterController state={state} shown={setIsShown} />
            </Pane>
          </Pane>
        </SideSheet>
      </Div>
    </>
  );
};

module.exports = ListWaiterComponents;
