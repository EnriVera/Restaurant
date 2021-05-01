import Head from "next/head";
import styled from "@emotion/styled";

//styles
const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;

export default function Head_Main({ children }) {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <Main>{children}</Main>
    </>
  );
}
