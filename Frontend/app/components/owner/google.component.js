import SvgGoogle from "../../public/logo.google";
require("../../styles/google-style/google.module.css");
export default function Google_Component() {
  return (
    <>
      <div className="google-button">
        <img
          className="iconfinder"
          src={
            "https://cdn.icon-icons.com/icons2/729/PNG/128/google_icon-icons.com_62736.png"
          }
        />
        <div className="text-1">Or sign-in with google</div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
        .google-button {
          align-items: center;
          background-color: rgb(45, 55, 72);
          border-radius: 5px;
          display: flex;
          padding: 15px 0 15px 0;
          justify-content: center;
          width: 51%;
          cursor: pointer;
          margin-bottom: 3rem;
        }
        .iconfinder {
          height: 20px;
          object-fit: cover;
          width: 20px;
        }
        .text-1 {
          letter-spacing: 0px;
          margin-left: 11px;
          font-family: Roboto;
          color: white;
          font-size: 16px;
        }
        @media (max-width: 414px) {
          .google-button {
            width: 56%;
          }
          .iconfinder {
            height: 14px;
            width: 14px;
          }
          .text-1 {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}
