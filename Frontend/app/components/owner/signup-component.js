import { useState } from "react";
import { useRouter } from "next/router";
import { toaster } from "evergreen-ui";

// styles
import styles from "../../styles/login-style/login.module.css";

//modules
const { EnviarInformacion } = require("../../models/owner/signup.model");

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
      <div className={styles.containerfrom}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            EnviarInformacion(user, router);
          }}
        >
          <label>Nombre completo:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="text"
            placeholder="Nombre completo"
            onChange={({ target }) => handleOnChange(target.value, "nombre")}
          />
          <label>Email:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="email"
            placeholder="Emial"
            onChange={({ target }) => handleOnChange(target.value, "email")}
          />
          <label>Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Password"
            onChange={({ target }) => handleOnChange(target.value, "password")}
          />
          <label>Repetir Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Repetir Password"
            onChange={({ target }) => ValidarRepetirPassword(target.value)}
          />
          <span
            className={styles.forgot_password}
            onClick={() => router.push("/send-password")}
          >
            Forgot password?
          </span>
          <input type="submit" value="Iniciar secion ahora" />
        </form>
      </div>
    </>
  );
}
