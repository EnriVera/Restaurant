import { useState } from "react";

const {SendEmail} = require("../../models/owner/send-email.model")
export default function SendPassword_Component() {
  const [user, setUser] = useState({
    email: "",
  });

  const handleOnChange = (data, camp) => {
    setUser({
      ...user,
      [camp]: data,
    });
  };
  return (
    <>
      <article>
        <div>
          <h1>Imgrese un email</h1>
          <p>
            Introduzca una direccion de email para mandarle un link para que
            pueda canviar la contraceña.
          </p>
        </div>
        <form onSubmit={(e) => {e.preventDefault(); SendEmail(user);}}>
          <label>Email:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="email"
            placeholder="Email"
            onChange={({target}) => handleOnChange(target.value, 'email')}
          />
          <input type="submit" value="Continuar" />
        </form>
      </article>
    </>
  );
}
