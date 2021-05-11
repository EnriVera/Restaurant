import { useDispatch, useSelector } from "react-redux";
import { Header, DivRestau, DivUser } from "./styles/header.styles";
import { Avatar, Popover, Menu, Position } from "evergreen-ui";
export default function HeaderController() {
  const active = useSelector((store) => store.restaurant.active);
  const owner = useSelector((store) => store.owner.user);
  return (
    <>
      <Header>
        <DivRestau>
          <p>Restaurant: {active.name || "None"}</p>
        </DivRestau>
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item onSelect={() => console.log("Information")}>
                  Information
                </Menu.Item>
              </Menu.Group>
              <Menu.Divider />
              <Menu.Group>
                <Menu.Item
                  onSelect={() => console.log("Log Out")}
                  intent="danger"
                >
                  Log Out
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <DivUser>
            <p>{owner.name}</p>
            {(owner.logo === null && (
              <Avatar isSolid name={owner.name} size={40} />
            )) || <Avatar src={owner.logo} name={owner.name} size={40} />}
          </DivUser>
        </Popover>
      </Header>
    </>
  );
}
