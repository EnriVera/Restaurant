import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";

const Valid = require("./valid-password-email.model");

/**
 * Funcion para canviar el password
 * @param {String} password El valor del password
 * @param {String} token El token del owner par aidentificar quien quiere canviar el password
 * @returns {void}
 */
const NewPasswordModel = async (password, token) => {

  /**
   * Permite retornar la validacion del password
   * @type {Boolean}
   */
  const valid = Valid(password, { m: false, p: true });

  if (!valid) return null;

  /**
   * Convierte el password del owner en un token
   * @type {String}
   */
  const owner = await jwt.sign(
    {
      owner: {
        password: password.password,
      },
    },
    process.env.secret_jwt
  );

  /**
   * Envia al backend el token del owner, para luego modificar el password del owner
   */
  await axios
    .post(
      `${process.env.url_restaurant}owner/new-password?v=${token[0]}`,
      {},
      { headers: { "new-password": owner } }
    )
    .then(() => {
      toaster.success("Password modificado");

      setInterval(() => {
        token[1].push("/");
      }, 4000);
    })
    .catch((e) => {
      if (e.response.status === 500) {
        toaster.danger("😔 Ocurio un problema", {
          description: "Verifique su coneccion a internet, o intente mas tarde",
        });
      } else {
        toaster.danger("El usuario no existe");
      }
    });
};

module.exports = NewPasswordModel;
