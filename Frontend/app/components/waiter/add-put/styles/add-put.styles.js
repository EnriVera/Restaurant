import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input(() => ({
  width: "100%",
  border: "1px solid #d8dae5",
  outline: "none",
  ":focus": {
    border: "1px solid #8f95b2",
  },
}));
const Submit = styled.input(({ background, color }) => ({
  margin: "20px",
  padding: "15px",
  fontSize: "11px",
  fontWeight: "bold",
  "background-color": `${background}`,
  color: color,
  border: "2px solid rgb(54, 54, 54)",
}));

const SpanSubmit = styled.span(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

module.exports = { Div, Input, Submit, SpanSubmit };
