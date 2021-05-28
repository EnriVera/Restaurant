import { useState, useEffect } from "react";
//const Redirect = require("../../models/redirect.model");
import NavComponents from "../../components/navbar/nav/nav.component";
const ListWaiterComponents = require("../../components/waiter/list-waiter/list-waiter.components")
const Waiter = () => {
  return (
    <>
      <NavComponents>
        <ListWaiterComponents />
      </NavComponents>
    </>
  );
};

module.exports = Waiter;
