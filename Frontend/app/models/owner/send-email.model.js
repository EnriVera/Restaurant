import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";

const Valid = require("./valid-password-email.model");

/**
 *Funcion para enviar el email para la verificacion del owner
 * @param {USER} user Contiene informacion del owner
 * @returns {void}
 */
const SendEmail = async (user) => {
  /**
   * Permite retornar la validacion del password y del email
   * @type {Boolean}
   */
  const valid = Valid(user, { m: true, p: false });

  if (!valid) return null;

  /**
   * Convierte el email del owner en un token
   * @type {String}
   */
  const owner = await jwt.sign(
    {
      owner: {
        email: user.email,
      },
    },
    process.env.secret_jwt
  );

  /**
   * Envia al backend el token del owner, para luego enviar un email para canviar el password
   */
  await axios
    .post(
      `${process.env.url_restaurant}owner/send-password`,
      {},
      { headers: { "new-password": owner } }
    )
    .then(() =>
      toaster.notify("Email enviado", {
        description:
          "Se le acaba de mandar un email con un link para que pueda canviar su password",
        duration: 20,
      })
    )
    .catch((e) => {
      if (e.response.status === 500) {
        toaster.danger("😔 Ocurio un problema", {
          description: "Verifique su coneccion a internet, o intente mas tarde",
        });
      } else {
        toaster.danger("El email es incorectos o no existe");
      }
    });
};

module.exports = SendEmail;
