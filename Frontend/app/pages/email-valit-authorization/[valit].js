const { useState, useEffect } = require("react");
const { useRouter } = require("next/router");
// styles
const {
  Div,
} = require("../../styles/email-authorization/email-authorization.styles");
import Head_Main from "../../components/head-main";
const axios = require("axios");

/**
 * Esta funcion se renderiza cuando la ruta es path("/email-valit-authorization/user?authentication={token del owner}")
 * @returns {any}
 */
const EmailValitAuthorization = () => {
  const router = useRouter();
  const [valit, setValit] = useState(false);
  useEffect(() => {
    /**
     * Devuelve el token del owner pasado por la query
     * @type {String}
     */
    const params = router.query.authentication;
    if (params) EnviarDatos(params);
  }, [router]);

  /**
   * Este metodo envia al backend el token del owner para agregarlo en la BD.
   * Si todo salio bien habilita el boton para ir al path("/dashboard")
   * @param {String} params
   */
  const EnviarDatos = (params) => {
    axios
      .get(
        `${process.env.url_restaurant}owner/confirm-authentication?authentication=${params}`
      )
      .then(() => setValit(true))
      .catch(() => {});
  };
  return (
    <>
      <Head_Main>
        <Div>
          <h1>Ha registrado su cuanta!!</h1>
          <p>
            Su cuanta se ha registrado con exitos. Ha continuacion precione el
            boton de 'Acceder al Dashboard' para ingresar a la aplicacion.
          </p>
          {valit && (
            <input
              type="submit"
              onClick={() => router.push("/dashboard")}
              value="Acceder al Dashboard"
            />
          )}
        </Div>
      </Head_Main>
    </>
  );
};

module.exports = { EmailValitAuthorization };
