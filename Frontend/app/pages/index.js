import { useState } from "react";
import Link from "next/link";

// style
import stylesHome from "../styles/Home.module.css";

// components
import SignUp_Component from "../components/owner/signup-component";
import Google_Component from "../components/owner/google.component";
import SignIn_Component from "../components/owner/signin-component";
import Head_Main from "../components/head-main";

export default function Home() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <Head_Main>
        <div className={stylesHome.login}>
          {(login && <h1>Hola :) Sing Up</h1>) || <h1>Hola :) Sing In</h1>}
          <Google_Component />
          <span className={stylesHome.or}>
            <span></span>
            <h3>or</h3>
            <span></span>
          </span>
          {(login && (
            <>
              <SignUp_Component />
              <div className={stylesHome.message}>
                <p>
                  Ya estas registrad@ ?. Entonces{" "}
                  <a onClick={() => setLogin(false)}>inicia secion</a>
                </p>
              </div>
            </>
          )) || (
            <>
              <SignIn_Component />
              <div className={stylesHome.message}>
                <p>
                  No estas registrad@ ?. Entonces{" "}
                  <a onClick={() => setLogin(true)}>crea una cuenta</a>
                </p>
              </div>
            </>
          )}
        </div>
      </Head_Main>
    </>
  );
}
