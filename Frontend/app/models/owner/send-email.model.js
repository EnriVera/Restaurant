import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";

import Valid from "./valid-password-email.model";
const SendEmail = async (user) => {
    const valid = Valid(user, {m: true, p: false});

    if (!valid) return null;
  
    const owner = await jwt.sign(
      {
        owner: {
          email: user.email,
        },
      },
      process.env.secret_jwt
    );
  
    await axios
      .post(
        `${process.env.url_restaurant}owner/send-password`,
        {},
        { headers: { "new-password": owner } }
      )
      .then(() => toaster.notify("Email enviado", {
        description: "Se le acaba de mandar un email con un link para que pueda canviar su password",
        duration: 20,
      }))
      .catch((e) => {
        if (e.response.status === 500) {
          toaster.danger("😔 Ocurio un problema", {
            description: "Verifique su coneccion a internet, o intente mas tarde",
          });
        } else {
          toaster.danger("El email es incorectos o no existe");
        }
      });

}

module.exports = {SendEmail}