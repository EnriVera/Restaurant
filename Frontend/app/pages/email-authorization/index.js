import styles from "../../styles/Home.module.css";
import Head_Main from "../../components/head-main";
export default function EmailAuthorization() {
  return (
    <>
      <Head_Main>
        <div>
          <h1>Le mandamos un email de autorizacion!!</h1>
          <p>
            Revise en su correo electronico o en la casilla de correro no
            deseados al hacer CLICK sobre el link automaticamente se le validara
            su cuenta.
          </p>
        </div>
      </Head_Main>

      <style jsx>{`
        div {
          width: 50vh;
          background: #edf2f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 5px;
        }

        div > h1 {
          font-size: 150%;
          margin-bottom: 0rem;
        }

        div > p {
          font-size: 15px;
          width: 75%;
          text-align: center;
        }
        @media (max-width: 700px) {
          div {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}
