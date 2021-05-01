// styles
import { SectionPassword } from "../../styles/send-new-password/send-new-password.styles";

// components
import SendPassword_Component from "../../components/owner/SendPassword/send-password.component";
import Head_Main from "../../components/head-main";

export default function SendPassword() {
  return (
    <>
      <Head_Main>
        <SectionPassword>
          <SendPassword_Component />
        </SectionPassword>
      </Head_Main>
    </>
  );
}
