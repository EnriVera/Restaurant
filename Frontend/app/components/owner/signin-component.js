import styles from "../../styles/login-style/login.module.css";

export default function SignIn_Component() {
  return (
    <>
      <div className={styles.containerfrom}>
        <form onSubmit={() => {}}>
          <label>Email:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="email"
            placeholder="Emial"
          ></input>
          <label>Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Password"
          ></input>
          <button>Iniciar secion</button>
        </form>
      </div>
    </>
  );
}
