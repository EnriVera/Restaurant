import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import {
  Nav,
  SectionNav,
  SectionContainer,
  Div,
  ArticleDashboard,
  Icon,
  DivRestaurant,
  DivImg,
  SpanImg
} from "./styles/nav.styles";
import SvgComponent from "../../../public/img-select.restaurant"
// component for evergreen
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
//components
import NavButton from "../nav-button/nav-button.component";
import NavSelect from "../nav-select/nav-select.components";
import HeaderController from "../header/header.controller";
//reducer
import { obtenerAllRestaurantAction } from "../../../reducers/restaurant.reducer";
import { infoUserAction } from "../../../reducers/user.reducer";

export default function NavComponents({ children }) {
  const dispatch = useDispatch();
  const [shown, setShown] = useState(false);

  useMemo(() => dispatch(obtenerAllRestaurantAction()));
  useMemo(() => dispatch(infoUserAction()));
  const restaurant = useSelector((store) => store.restaurant.active);
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
          <NavButton title="Dashboard" icon={TimelineAreaChartIcon} />
          <NavButton title="Tables" icon={FullCircleIcon} />
          <NavButton title="Waiter" icon={PersonIcon} />
          <NavButton title="Product" icon={GlassIcon} />
          <NavButton title="Addition" icon={ClipboardIcon} />
        </SectionNav>
        <SectionContainer>
          <HeaderController />
          <ArticleDashboard>
          {
            restaurant.id === undefined && (
              <DivImg>
                <SpanImg>
                  <SvgComponent />
                  <h1>Seleccione un restaurant o cree uno nuevo</h1>
                </SpanImg>
              </DivImg>
            ) || (
              <>
                {children}
              </>
            )
          }
          </ArticleDashboard>
        </SectionContainer>
      </Nav>

      <SideSheet isShown={shown} onCloseComplete={() => setShown(!shown)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
    </>
  );
}
