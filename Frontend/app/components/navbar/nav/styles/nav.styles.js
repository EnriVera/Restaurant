import styled from "@emotion/styled";
import { Icon as NavIcon } from "evergreen-ui";

const Nav = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  font-family: Montserrat;
`;

const SectionNav = styled.section`
  width: 30vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Div = styled.div`
  width: 80%;
  margin-top: 1rem;
  p {
    font-size: 13px;
    font-weight: bold;
    color: #b9b9c3;
  }
`;

const DivRestaurant = styled.div`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 13px;
    font-weight: bold;
    color: #b9b9c3;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
`;

const ArticleDashboard = styled.article`
  width: 90%;
  height: 100%;
  margin-top: 21px;
  overflow: hidden;
`;

const Icon = styled(NavIcon)`
  color: #5e5873;
  cursor: pointer;
`;

const DivImg = styled.div(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}))

const SpanImg = styled.span(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  h1: {
    color: "#5e5873",
    fontSize: "22px"
  }
}))

module.exports = {
  Nav,
  SectionNav,
  SectionContainer,
  Div,
  ArticleDashboard,
  Icon,
  DivRestaurant,
  DivImg,
  SpanImg
};
