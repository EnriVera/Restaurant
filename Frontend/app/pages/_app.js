import "../styles/globals.css";
import "next/router";
import { Provider } from "react-redux";
import generateStore from "../reducers/index";

function MyApp({ Component, pageProps }) {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
