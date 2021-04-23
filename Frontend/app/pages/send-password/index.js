// styles
import stylesSendPassword from "../../styles/send-new-password-style/send-new-password.module.css";

// components
import SendPassword_Component from "../../components/owner/send-password.component";
import Head_Main from "../../components/head-main";

export default function SendPassword() {
  return (
    <>
      <Head_Main>
        <secion className={stylesSendPassword.password}>
          <SendPassword_Component />
        </secion>
      </Head_Main>
    </>
  );
}
