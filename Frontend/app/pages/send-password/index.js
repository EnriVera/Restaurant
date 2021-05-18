// styles
import { SectionPassword } from "../../styles/send-new-password/send-new-password.styles";

// components
import SendPassword_Component from "../../components/owner/SendPassword/send-password.component";
import Head_Main from "../../components/head-main";

/**
 * Esta funcion se renderiza cuando la ruta es path("/send-password")
 * @returns {any}
 */
const SendPassword = () => {
  return (
    <>
      <Head_Main>
        <SectionPassword>
          <SendPassword_Component />
        </SectionPassword>
      </Head_Main>
    </>
  );
};

module.exports = { SectionPassword };
