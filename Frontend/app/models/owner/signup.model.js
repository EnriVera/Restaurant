import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";
// import getConfig from 'next/config'

const Valid = require("./valid-password-email.model");

/**
 *Funcion para reguistrarce
 * @param {USER} user Contiene informacion del owner
 * @param {*} router Permite redirigir el path
 * @returns {void}
 */
const EnviarInformacion = async (user, router) => {
  /**
   * Permite retornar la validacion del password y del email
   * @member {Boolean}
   */
  const valid = Valid(user, { m: true, p: true });

  if (!valid) return null;

  /**
   * Convierte la informacion del owner en un token
   * @member {String}
   */
  const owner = await jwt.sign(
    {
      owner: {
        name: user.nombre,
        email: user.email,
        password: user.repirtPassword,
      },
    },
    process.env.secret_jwt
  );

  /**
   * Envia al backend el token del owner, para luego enviar un email para la validacion
   */
  await axios
    .post(
      `${process.env.url_restaurant}owner/signup`,
      {},
      { headers: { oauth: owner } }
    )
    .then(() => router.push("/email-authorization"))
    .catch((e) => {
      if (e.response.status === 500) {
        toaster.danger("😔 Ocurio un problema", {
          description: "Verifique su coneccion a internet, o intente mas tarde",
        });
      } else {
        toaster.danger("El email ya existe");
      }
    });
};

module.exports = EnviarInformacion;
