import { useState } from "react";
import { useRouter } from "next/router";
import { toaster } from "evergreen-ui";

// styles
const { ContainerFrom, ForgotPassword, Input} = require("./styles/signup.styles");

//modules
const { EnviarInformacion } = require("../../../models/owner/signup.model");

export default function SignUp_Component() {
  const router = useRouter();
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
    repirtPassword: "",
  });
  const handleOnChange = (data, camp) => {
    setUser({
      ...user,
      [camp]: data,
    });
  };

  const ValidarRepetirPassword = (target) => {
    if (target === user.password) {
      handleOnChange(target, "repirtPassword");
      toaster.success("Password corecto");
    }
  };
  return (
    <>
      <div className={ContainerFrom}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            EnviarInformacion(user, router);
          }}
        >
          <label>Nombre completo:</label>
          <Input
            type="text"
            placeholder="Nombre completo"
            onChange={({ target }) => handleOnChange(target.value, "nombre")}
          />
          <label>Email:</label>
          <Input
            type="email"
            placeholder="Emial"
            onChange={({ target }) => handleOnChange(target.value, "email")}
          />
          <label>Password:</label>
          <Input
            type="password"
            placeholder="Password"
            onChange={({ target }) => handleOnChange(target.value, "password")}
          />
          <label>Repetir Password:</label>
          <Input
            type="password"
            placeholder="Repetir Password"
            onChange={({ target }) => ValidarRepetirPassword(target.value)}
          />
          <ForgotPassword
            onClick={() => router.push("/send-password")}
          >
            Forgot password?
          </ForgotPassword>
          <Input type="submit" value="Iniciar secion ahora" />
        </form>
      </div>
    </>
  );
}
