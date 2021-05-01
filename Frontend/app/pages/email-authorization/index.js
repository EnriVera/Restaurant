// styles
const { Div } = require('../../styles/email-authorization/email-authorization.styles')
import Head_Main from "../../components/head-main";
export default function EmailAuthorization() {
  return (
    <>
      <Head_Main>
        <Div>
          <h1>Le mandamos un email de autorizacion!!</h1>
          <p>
            Revise en su correo electronico o en la casilla de correro no
            deseados al hacer CLICK sobre el link automaticamente se le validara
            su cuenta.
          </p>
        </Div>
      </Head_Main>
    </>
  );
}
