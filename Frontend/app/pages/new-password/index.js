// styles
import stylesSendPassword from "../../styles/send-new-password-style/send-new-password.module.css";

//components
import Head_Main from '../../components/head-main';
import NewPassword_Component from '../../components/owner/new-password.component'
export default function NewPassword() {
    return (
        <>
        <Head_Main>
        <secion className={stylesSendPassword.password}>
          <NewPassword_Component />
        </secion>
        </Head_Main>
        </>
    )
}