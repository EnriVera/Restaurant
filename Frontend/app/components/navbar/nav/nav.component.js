import { useState } from "react";
import {
  Nav,
  SectionNav,
  SectionContainer,
  Div,
  ArticleDashboard,
  Icon,
  DivRestaurant,
} from "./styles/nav.styles";
import NavButton from "../nav-button/nav-button.component";
import NavSelect from "../nav-select/nav-select.components";
import HeaderController from "../header/header.controller";
import {
  FullCircleIcon,
  PersonIcon,
  GlassIcon,
  ClipboardIcon,
  TimelineAreaChartIcon,
  AddIcon,
  Tooltip,
  Position,
  SideSheet,
  Paragraph,
} from "evergreen-ui";
export default function NavComponents() {
  const [shown, setShown] = useState(false);
  return (
    <>
      <Nav>
        <SectionNav>
          <DivRestaurant>
            <p>Restaurant</p>
            <Tooltip position={Position.RIGHT} content="Add new restaurant">
              <Icon icon={AddIcon} size={12} onClick={() => setShown(!shown)} />
            </Tooltip>
          </DivRestaurant>
          <NavSelect />
          <Div>
            <p>Tools</p>
          </Div>
          <NavButton title="Dasboard" icon={TimelineAreaChartIcon} />
          <NavButton title="Tables" icon={FullCircleIcon} />
          <NavButton title="Waiter" icon={PersonIcon} />
          <NavButton title="Product" icon={GlassIcon} />
          <NavButton title="Addition" icon={ClipboardIcon} />
        </SectionNav>
        <SectionContainer>
          <HeaderController />
          <ArticleDashboard></ArticleDashboard>
        </SectionContainer>
      </Nav>

      <SideSheet isShown={shown} onCloseComplete={() => setShown(!shown)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
    </>
  );
}
