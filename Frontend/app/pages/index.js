import { useState } from "react";
import Link from "next/link";

// style
import stylesHome from "../styles/Home.module.css";
import Login from "../public/image.login";

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
        <section className="login-image">
          <article className="image">
            <Login />
          </article>
          <article className="login">
            <span className="title">
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
            </span>
            {(login && <SignUp_Component />) || <SignIn_Component />}
            <Google_Component />
            {(login && (
              <>
                <div className={stylesHome.message}>
                  <p>
                    Ya estas registrad@ ?. Entonces{" "}
                    <a onClick={() => setLogin(false)}>inicia secion</a>
                  </p>
                </div>
              </>
            )) || (
              <>
                <div className={stylesHome.message}>
                  <p>
                    No estas registrad@ ?. Entonces{" "}
                    <a onClick={() => setLogin(true)}>crea una cuenta</a>
                  </p>
                </div>
              </>
            )}
          </article>
        </section>
      </Head_Main>

      <style jsx>{`
        .login-image {
          width: 70%;
          height: 80%;
          display: flex;
          flex-direction: row;
          background: white;
          border-radius: 5px;
        }

        .image {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 5rem;
        }

        .login {
          width: 50%;
          background: #edf2f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 5px;
        }

        .title > p {
          font-size: 16px;
          color: #2d3748;
        }

        .title > h1 {
          font-size: 30px;
          color: #1a202c;
        }
        @media (max-width: 1300px) {
          .image {
            display: none;
          }

          .login {
            width: 100%;
          }
        }

        @media (max-width: 700px) {
          .login-image {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
