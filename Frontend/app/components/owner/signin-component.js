import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/login-style/login.module.css";

const {SignIn} = require("../../models/owner/signin.model");

export default function SignIn_Component() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (data, camp) => {
    setUser({
      ...user,
      [camp]: data,
    });
  };
  return (
    <>
      <div className={styles.containerfrom}>
        <form onSubmit={(e) => {e.preventDefault(); SignIn(user, router);}}>
          <label>Email:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="email"
            placeholder="Emial"
            onChange={({ target }) => handleOnChange(target.value, 'email') }
          ></input>
          <label>Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Password"
            onChange={({ target }) => handleOnChange(target.value, 'password') }
          ></input>
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
