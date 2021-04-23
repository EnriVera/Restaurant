import Head from "next/head";

//styles
import stylesHeadMain from "../styles/Home.module.css";
export default function Head_Main({children}) {
  return (
    <>
      <Head>
        <title>Restaurant</title>
        <link rel="icon" href="../favicon.ico" />
      </Head>
      <main className={stylesHeadMain.main}>{children}</main>
    </>
  );
}
