import styled from "@emotion/styled";
import { Icon as NavIcon } from "evergreen-ui";

const ArticleNavButton = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  margin: 1rem 0 1rem 0;
`;

// background: linear-gradient(46.62deg, #7367f0 0%, #9e95f5 93.64%);
const A = styled.a`
  width: 80%;
  height: 42px;
  color: #5E5873;
  background: #fff;
  text-decoration: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  :hover {
    background: #F8F8F8;
  }
`;

const Icon = styled(NavIcon)`
  margin: 0 18px 0 15px;
  color: #5E5873;
`
module.exports = { ArticleNavButton, A,Icon};
