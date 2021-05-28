import styled from "@emotion/styled";

const DivContaiener = styled.div(() => ({
  width: "auto",
  marginTop: '0.5rem',
  display: 'flex',
  flexDirection: 'column'
}));

const DivHeader = styled.div(({ size }) => ({
  width: "100%",
  background: '#f8f8f8',
  display: "grid",
  gridTemplateColumns: size,
  gridAutoFlow: "column",
  marginBottom: "0.6rem",
  borderRadius: '5px'
}));

const AHeader = styled.a(() => ({
  width: "100%",
  paddingBottom: '0.5rem',
  paddingTop: '0.5rem',
  fontFamily: "Montserrat",
  fontSize: "15px",
  fontWeight: 'bold',
  textAlign: "center",
  borderRadius: '5px'
}));

const DivContent = styled.div(({ size }) => ({
  width: "100%",
  border: '1px solid #f8f8f8',
  display: "grid",
  gridTemplateColumns: size,
  gridAutoFlow: "column",
  marginBottom: "0.6rem",
  borderRadius: '5px'
}));

const AContent = styled.a(() => ({
  width: "100%",
  height: "4vh",
  fontFamily: "Montserrat",
  fontSize: "14px",
  textAlign: "center",
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

module.exports = { DivContaiener, DivHeader, AHeader, DivContent, AContent };
