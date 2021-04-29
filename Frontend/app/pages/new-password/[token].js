import { useState } from "react";
import { useRouter } from "next/router";
// styles
import stylesSendPassword from "../../styles/send-new-password-style/send-new-password.module.css";

//components
import Head_Main from "../../components/head-main";
import NewPassword_Component from "../../components/owner/new-password.component";
export default function NewPassword() {
  const router = useRouter();
  const {v} = router.query
  return (
    <>
      <Head_Main>
        <secion className={stylesSendPassword.password}>
          <NewPassword_Component token={[v, router]} />
        </secion>
      </Head_Main>
    </>
  );
}
