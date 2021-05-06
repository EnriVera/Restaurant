import styled from "@emotion/styled";
import { Icon as NavIcon } from "evergreen-ui";

const ArticleNavButton = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 1rem 0 1rem 0;
`;

// background: linear-gradient(46.62deg, #7367f0 0%, #9e95f5 93.64%);
const DivSelect = styled.div`
  width: 80%;
  height: 42px;
  color: #5e5873;
  background: #f8f8f8;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  h5 {
    margin-left: -18px;
  }
`;

const DivModalSelect = styled.div`
  width: 80%;
  background: #f8f8f8;
  border-radius: 5px;
  margin-top: .5rem;
  height: auto;
  div {
    color: #5E5873;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    margin: 0.5rem 0 0.5rem 0;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background: #eaeaea;
    }
  }
`;

const Icon = styled(NavIcon)`
  margin-right: -18px;
  color: #5e5873;
`;
module.exports = { ArticleNavButton, DivSelect, DivModalSelect, Icon };
