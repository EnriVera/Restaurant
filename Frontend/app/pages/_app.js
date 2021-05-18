import "../styles/globals.css";
import "next/router";
import {wrapper} from "../reducers/index";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);
