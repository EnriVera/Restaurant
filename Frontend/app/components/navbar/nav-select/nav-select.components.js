import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActiveRestaurantAction } from "../../../reducers/restaurant.reducer";
const {
  ArticleNavButton,
  DivSelect,
  DivModalSelect,
  Icon,
} = require("./styles/nav-select.styles");

import { ChevronDownIcon, ChevronUpIcon } from "evergreen-ui";
export default function NavSelect() {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  // const [valueSelect, setValueSelect] = useState({
  //   id: "none",
  //   name: "None",
  //   count_tables: "0",
  //   count_waiters: "0",
  //   waiters_working: "0",
  // });
  const valueSelect = useSelector((store) => store.restaurant.active);
  const allRestaurant = useSelector((store) => store.restaurant.array);

  const ValueSelect = (restaurant) => {
    setSelect(!select);
    dispatch(ActiveRestaurantAction(restaurant.id));
  };

  return (
    <>
      <ArticleNavButton>
        <DivSelect onClick={() => setSelect(!select)}>
          <h5>{valueSelect.name || "None"}</h5>
          {(!select && <Icon icon={ChevronDownIcon} size={12} />) || (
            <Icon icon={ChevronUpIcon} size={12} />
          )}
        </DivSelect>
        {select && (
          <DivModalSelect>
            {(allRestaurant && (
              <>
                {allRestaurant.map((data) => (
                  <>
                    {valueSelect.id !== data.id && (
                      <div
                        key={`Key restaurant: ${data.id}`}
                        onClick={() =>
                          ValueSelect({ id: data.id, name: data.name })
                        }
                      >
                        <h5>{data.name}</h5>
                      </div>
                    )}
                  </>
                ))}
              </>
            )) || (
              <div>
                <h5>Not restaurant</h5>
              </div>
            )}
          </DivModalSelect>
        )}
      </ArticleNavButton>
    </>
  );
}
