import { useRouter } from "next/router";
import { toaster } from "evergreen-ui";
import { DivGoogle, ImgGoogle, SpanGoogle } from "./styles/google.styles";

export default function Google_Component() {
  const router = useRouter();
  const google = () => {
    router
      .push(`${process.env.url_restaurant}owner/google`)
      .then()
      .catch(() => toaster.danger("Fallo el inicio de session con google"));
  };
  return (
    <>
      <DivGoogle onClick={() => google()}>
        <ImgGoogle
          src={
            "https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png"
          }
        />
        <SpanGoogle>Or sign-in with google</SpanGoogle>
      </DivGoogle>
    </>
  );
}
