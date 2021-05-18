import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";
axios.defaults.withCredentials = true;
// import getConfig from 'next/config'

const Valid = require("./valid-password-email.model");

/**
 *Funcion para iniciar session
 * @param {USER} user Contiene informacion del owner
 * @param {*} router Permite redirigir el path
 * @returns {void}
 */
const SignIn = async (user, router) => {
  
  /**
   * Permite retornar la validacion del password y del email
   * @type {Boolean}
   */
  const valid = Valid(user, { m: true, p: false });

  if (!valid) return null;

  /**
   * Convierte la informacion del owner en un token
   * @type {String}
   */
  const owner = await jwt.sign(
    {
      owner: {
        email: user.email,
        password: user.password,
      },
    },
    process.env.secret_jwt
  );

  /**
   * Envia al backend el token del owner, para luego iniciar session
   */
  await axios
    .post(
      `${process.env.url_restaurant}owner/signin`,
      {},
      // { headers: { oauth: owner } }
      { withCredentials: true, headers: { oauth: owner } }
    )
    .then((e) => {
      router.push("/dashboard");
    })
    .catch((e) => {
      if (e.response.status === 500) {
        toaster.danger("😔 Ocurio un problema", {
          description: "Verifique su coneccion a internet, o intente mas tarde",
        });
      } else {
        toaster.danger(
          "El email o el password son incorectos o el email no existe"
        );
      }
    });
};

export default SignIn;
