import jwt from "jsonwebtoken";
import { toaster } from "evergreen-ui";
import axios from "axios";
// import getConfig from 'next/config'

import Valid from "./valid-password-email.model"

const EnviarInformacion = async (user, router) => {
  const valid = Valid(user, {m: true, p: true});

  if (!valid) return null;

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

  await axios
    .post(
      `${process.env.url_restaurant}owner/signup`,
      {},
      { headers: { oauth: owner } }
    )
    .then(() => router.push("/email-authorization"))
    .catch(() =>
      toaster.danger("😔 Ocurio un problema", {
        description: "Verifique su coneccion a internet, o intente mas tarde",
      })
    );
};

module.exports = { EnviarInformacion };
