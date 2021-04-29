import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";

import Valid from "./valid-password-email.model";

const NewPasswordModel = async (password, token) => {
    const valid = Valid(password, {m: false, p: true});

    if (!valid) return null;
  
    const owner = await jwt.sign(
      {
        owner: {
          password: password.password,
        },
      },
      process.env.secret_jwt
    );
    console.log(token[0])
    await axios
      .post(
        `${process.env.url_restaurant}owner/new-password?v=${token[0]}`,
        {},
        { headers: { "new-password": owner } }
      )
      .then(() => 
      {
          toaster.success('Password modificado')

          setInterval(() => {
            token[1].push('/')
          }, 4000)
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
}

module.exports = {NewPasswordModel}