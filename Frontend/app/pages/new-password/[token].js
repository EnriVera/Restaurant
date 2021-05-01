import { useState } from "react";
import { useRouter } from "next/router";
// styles
import { SectionPassword } from "../../styles/send-new-password/send-new-password.styles";

//components
import Head_Main from "../../components/head-main";
import NewPassword_Component from "../../components/owner/NewPassword/new-password.component";

export default function NewPassword() {
  const router = useRouter();
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
}
