const {useState, useEffect} = require('react')
const { useRouter } = require("next/router");
// styles
const { Div } = require('../../styles/email-authorization/email-authorization.styles')
import Head_Main from "../../components/head-main";
const axios = require('axios')
export default function EmailValitAuthorization() {
    const router = useRouter()
    const [valit, setValit] = useState(false)
    useEffect(() => {
        const params = router.query.authentication;
        if (params) EnviarDatos(params)
    }, [router])
    const EnviarDatos = (params) => {
        axios.get(`${process.env.url_restaurant}owner/confirm-authentication?authentication=${params}`)
        .then(() => setValit(true))
        .catch(() => {})
    }
  return (
    <>
      <Head_Main>
        <Div>
          <h1>Ha registrado su cuanta!!</h1>
          <p>
            Su cuanta se ha registrado con exitos. Ha continuacion precione el boton de 'Acceder al Dashboard' para ingresar a la aplicacion.
          </p>
          {
            valit && <input type="submit" value="Acceder al Dashboard" />
          }
        </Div>
      </Head_Main>
    </>
  );
}
