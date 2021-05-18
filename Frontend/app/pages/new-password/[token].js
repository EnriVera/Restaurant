import { useRouter } from "next/router";
// styles
import { SectionPassword } from "../../styles/send-new-password/send-new-password.styles";

//components
import Head_Main from "../../components/head-main";
import NewPassword_Component from "../../components/owner/NewPassword/new-password.component";

/**
 * Esta funcion se renderiza cuando la ruta es path("/new-password/user?v={token del owner}")
 * @returns {any}
 */
const NewPassword = () => {
  const router = useRouter();

  /**
   * Esta constante devuelve el token del owner
   * @type {String}
   */
  const { v } = router.query;
  return (
    <>
      <Head_Main>
        <SectionPassword>
          <NewPassword_Component token={[v, router]} />
        </SectionPassword>
      </Head_Main>
    </>
  );
};

module.exports = { NewPassword };
