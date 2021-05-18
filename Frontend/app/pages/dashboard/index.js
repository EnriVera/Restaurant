import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Redirect from "../../models/redirect.model";
//const Redirect = require("../../models/redirect.model");
import NavComponents from "../../components/navbar/nav/nav.component";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    Redirect(router);
  }, []);
  return (
    <>
      <NavComponents> 
      <h1>Hola dddddddd</h1>
      </NavComponents>
    </>
  );
};

module.exports = Dashboard;
// export default Dashboard
