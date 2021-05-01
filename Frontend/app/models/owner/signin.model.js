import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";
// import getConfig from 'next/config'

import Valid from "./valid-password-email.model";

const SignIn = async (user, router) => {
  const valid = Valid(user, {m: true, p: false});

  if (!valid) return null;

  const owner = await jwt.sign(
    {
      owner: {
        email: user.email,
        password: user.password,
      },
    },
    process.env.secret_jwt
  );
  
  await axios
    .post(
      `${process.env.url_restaurant}owner/signin`,
      {},
      { headers: { oauth: owner } }
    )
    .then(() => router.push("/dashboard"))
    .catch((e) => {
      if (e.response.status === 500) {
        toaster.danger("😔 Ocurio un problema", {
          description: "Verifique su coneccion a internet, o intente mas tarde",
        });
      } else {
        toaster.danger("El email o el password son incorectos o el email no existe");
      }
    });
};

module.exports = { SignIn };