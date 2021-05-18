/**
 * @typedef {Object} USER
 * @property {String} nombre
 * @property {String} email
 * @property {String} password
 * @property {String} repirtPassword
 */

/**
 * @typedef {Object} TIPE
 * @property {Boolean} m Si es del tipo email se habilita la validacion
 * @property {Boolean} p Si es del tipo password se habilita la validacion
 */

import { toaster } from "evergreen-ui";

/**
 * Funcion para validacion de email y password
 * @param {USER} user 
 * @param {TIPE} tipe 
 * @returns {Boolean}
 */
const Valid = (user, tipe) => {
  const mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  const passwordformat =
    "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=-_])(?=\\S+$).{8,20}$";

  // validar email y password
  if (tipe.m === true) {
    if (mailformat.test(user.email) === false) {
      toaster.danger("Email ingresado no valido", {
        description:
          'El email tiene que incluir los siguientes caracteres "@, gmail, .com"',
        duration: 20,
      });
      return false;
    }
  }
  if (tipe.p === true) {
    if (user.password.match(passwordformat) === null) {
      toaster.danger("Password ingresado no valido", {
        description:
          "El Password tien que tener almenos un numero y un letra mayuscula, la cantidad de caracteres van de 8 a 20",
        duration: 20,
      });

      return false;
    }
  }

  return true;
}

module.exports = Valid