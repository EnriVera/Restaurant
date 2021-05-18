import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Redirect from "../../models/redirect.model";
//const Redirect = require("../../models/redirect.model");
import NavComponents from "../../components/navbar/nav/nav.component";
import LitsTablesController from "../../components/tables/list-tables/list-tables.controller"

const Tables = () => {
  const router = useRouter();
  useEffect(() => {
    Redirect(router);
  }, []);
  return (
    <>
      <NavComponents>
          <LitsTablesController />
      </NavComponents>
    </>
  );
};

module.exports = Tables;
