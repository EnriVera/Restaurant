import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'
import Redirect from "../models/redirect.model";
// style
import {
  SectionLoginImages,
  ArticleImages,
  ArticleLogin,
  SpanTitle,
  DivMessage,
} from "../styles/Index/index.styles";
import Login from "../public/image.login";

// components
import SignUp_Component from "../components/owner/SignUp/signup-component";
import Google_Component from "../components/owner/Google/google.component";
import SignIn_Component from "../components/owner/SignIn/signin-component";
import Head_Main from "../components/head-main";

/**
 * Esta funcion se renderiza cuando la ruta es path("/")
 * @returns {any}
 */
const Home = () => {
  const [login, setLogin] = useState(true);
  const router = useRouter();
  useEffect(() => {
    Redirect(router);
  }, []);
  return (
    <>
      <Head_Main>
        <SectionLoginImages>
          <ArticleImages>
            {/* <Login /> */}
            <Image
        src="/login.jpg"
        alt="Picture of the author"
        width={1000}
        height={1160}
      />
          </ArticleImages>
          <ArticleLogin>
            <SpanTitle>
              {(login && (
                <>
                  <p>Bienvenido</p>
                  <h1>Sign Up en su cuenta</h1>
                </>
              )) || (
                <>
                  <p>Bienvenido de vuelta</p>
                  <h1>Sign In en su cuenta</h1>
                </>
              )}
            </SpanTitle>
            {(login && <SignUp_Component />) || <SignIn_Component />}
            <Google_Component />
            {(login && (
              <>
                <DivMessage>
                  <p>
                    Ya estas registrad@ ?. Entonces{" "}
                    <a onClick={() => setLogin(false)}>inicia secion</a>
                  </p>
                </DivMessage>
              </>
            )) || (
              <>
                <DivMessage>
                  <p>
                    No estas registrad@ ?. Entonces{" "}
                    <a onClick={() => setLogin(true)}>crea una cuenta</a>
                  </p>
                </DivMessage>
              </>
            )}
          </ArticleLogin>
        </SectionLoginImages>
      </Head_Main>
    </>
  );
};

module.exports = Home;
