import { Header, DivRestau, DivUser } from "./styles/header.styles";
import { Avatar, Popover, Menu, Position } from "evergreen-ui";
export default function HeaderController() {
  return (
    <>
      <Header>
        <DivRestau>
          <p>Restaurant: Hola</p>
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
            <p>Enrique Vera</p>
            <Avatar isSolid name="Enrique Vera" size={40} />
          </DivUser>
        </Popover>
      </Header>
    </>
  );
}
