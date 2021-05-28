import styled from "@emotion/styled";

const Section = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Article = styled.div(() => ({
  height: "30vh",
  width: "50%",
  padding: "0.5rem",
  color: "#5E5873",
  background: "#fff",
  borderRadius: "6px",
  margin: "1rem",
}));

module.exports = { Section, Article };
