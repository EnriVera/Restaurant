export default function SendPassword_Component() {
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
        <form onSubmit={() => {}}>
          <label>Email:</label>
          <input style={{ border: "2px solid rgb(54, 54, 54)" }} type="email" placeholder="Email"></input>
          <button>Continuar...</button>
        </form>
      </article>
    </>
  );
}
