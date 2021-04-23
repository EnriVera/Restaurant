import styles from "../../styles/login-style/login.module.css";

export default function SignUp_Component() {
  return (
    <>
      <div className={styles.containerfrom}>
        <form onSubmit={() => {}}>
          <label>Nombre completo:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="text"
            placeholder="Nombre completo"
          ></input>
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
          <label>Repetir Password:</label>
          <input
            style={{ border: "2px solid rgb(54, 54, 54)" }}
            type="password"
            placeholder="Repetir Password"
          ></input>
          <button>Iniciar secion</button>
        </form>
      </div>
    </>
  );
}
