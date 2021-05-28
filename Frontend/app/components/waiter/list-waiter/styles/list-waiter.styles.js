import styled from "@emotion/styled";

const Div = styled.div`
 background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 12%);
  padding-top: 1rem; 
`;

const SpanHeaderTable = styled.span(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1rem 1rem 1rem",
  h1: {
    fontSize: "40px",
    color: '#5E5873'
  }
}))

module.exports = { Div, SpanHeaderTable };