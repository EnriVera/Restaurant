import { useState } from "react";
const {
  ArticleNavButton,
  DivSelect,
  DivModalSelect,
  Icon,
} = require("./styles/nav-select.styles");

import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";
export default function NavSelect() {
  const [select, setSelect] = useState(false);
  const [valueSelect, setValueSelect] = useState({
    id: "none",
    name: "None",
  });
  const ValueSelect = (restaurant) => {
    setSelect(!select);
    setValueSelect(restaurant);
  };
  return (
    <>
      <ArticleNavButton>
        <DivSelect onClick={() => setSelect(!select)}>
          <h5>{valueSelect.name}</h5>
          {(!select && <Icon icon={ChevronDownIcon} size={12} />) || (
            <Icon icon={ChevronUpIcon} size={12} />
          )}
        </DivSelect>
        {select && (
          <DivModalSelect>
            {valueSelect.id !== "1" && (
              <div onClick={() => ValueSelect({ id: "1", name: "Resta1" })}>
                <h5>Resta1</h5>
              </div>
            )}
            {valueSelect.id !== "2" && (
              <div onClick={() => ValueSelect({ id: "2", name: "El Resta 1" })}>
                <h5>El Resta 1</h5>
              </div>
            )}
            {valueSelect.id !== "3" && (
              <div onClick={() => ValueSelect({ id: "3", name: "ELll Re" })}>
                <h5>ELll Re</h5>
              </div>
            )}
            {valueSelect.id !== "4" && (
              <div onClick={() => ValueSelect({ id: "4", name: "Pepe" })}>
                <h5>Pepe</h5>
              </div>
            )}
          </DivModalSelect>
        )}
      </ArticleNavButton>
    </>
  );
}
