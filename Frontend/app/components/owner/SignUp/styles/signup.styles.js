import { css } from "@emotion/css";
import styled from "@emotion/styled";
const ContainerFrom = css`
  width: 60%;
  @media (max-width: 414px) {
    width: 67%;
  }
`;
const ForgotPassword = styled.span`
  color: #2c5282;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  cursor: pointer;
  @media (max-width: 414px) {
    font-size: 10px;
  }
`;

const Input = styled.input`
  border: 2px solid rgb(54, 54, 54)
`

module.exports = { ContainerFrom, ForgotPassword, Input };
