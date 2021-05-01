import { useState, useEffect } from "react";
import { toaster } from "evergreen-ui";

const {NewPasswordModel} = require("../../../models/owner/new-password.model");

export default function NewPassword_Component({ token }) {
  const [user, setUser] = useState({
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
      <article>
        <div>
          <h1>Canviar contraceña</h1>
          <p>Introduzca la contraceña que desea y repetila para verificarla.</p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            NewPasswordModel(user, token);
          }}
        >
          <label>Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Password"
            onChange={({ target }) => handleOnChange(target.value, 'password')}
          ></input>
          <label>Repetir Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Repetir Password"
            onChange={({ target }) => ValidarRepetirPassword(target.value)}
          ></input>
          <input type="submit" value="Continuar" />
        </form>
      </article>
    </>
  );
}
