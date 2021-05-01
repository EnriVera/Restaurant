import { useState } from "react";
import { useRouter } from "next/router";

//styles
const { ContainerFrom, ForgotPassword, Input } = require("./styles/signin.styles");

//model
const {SignIn} = require("../../../models/owner/signin.model");

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
      <div className={ContainerFrom}>
        <form onSubmit={(e) => {e.preventDefault(); SignIn(user, router);}}>
          <label>Email:</label>
          <Input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="email"
            placeholder="Emial"
            onChange={({ target }) => handleOnChange(target.value, 'email') }
          />
          <label>Password:</label>
          <Input
            type="password"
            placeholder="Password"
            onChange={({ target }) => handleOnChange(target.value, 'password') }
          />
          <span
            className={ForgotPassword}
            onClick={() => router.push("/send-password")}
          >
            Forgot password?
          </span>
          <Input type="submit" value="Iniciar secion ahora" />
        </form>
      </div>
    </>
  );
}
