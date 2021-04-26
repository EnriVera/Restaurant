export default function NewPassword_Component() {
    return (
      <>
        <article>
          <div>
            <h1>Canviar contraceña</h1>
            <p>
              Introduzca la contraceña que desea y repetila para verificarla.
            </p>
          </div>
          <form onSubmit={() => {}}>
            <label>Password:</label>
            <input style={{ border: "2px solid rgb(54, 54, 54)" }} type="password" placeholder="Password"></input>
            <label>Repetir Password:</label>
            <input style={{ border: "2px solid rgb(54, 54, 54)" }} type="password" placeholder="Repetir Password"></input>
            <input type="submit" value="Continuar" />
          </form>
        </article>
      </>
    );
  }
  