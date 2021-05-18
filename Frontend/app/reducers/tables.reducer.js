import { AxiosW } from "../models/Axios";
import { HYDRATE } from "next-redux-wrapper";

// const
const dataInitial = {
  allArray: [],
};

// types
const GETALL_TABLES = "@TABLES/GETALL";
const POST_TABLES = "@TABLES/POST";

// reducer
export default function tablesReducer(state = dataInitial, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case GETALL_TABLES:
      return { ...state, allArray: action.payload };
    case POST_TABLES:
      return { ...state, allArray: [...state.allArray, action.payload] };
    default:
      return state;
  }
}

// actions
export const GetAllTablesAction = () => (dispatch, getState) => {
  const restaurant = getState().restaurant.active;
  AxiosW.get(`tables/all-tables?restaurant=${restaurant.id}`)
    .then(({ data }) => {
      dispatch({
        type: GETALL_TABLES,
        payload: data.tables,
      });
    })
    .catch((e) => {
      if(e.response.status === 404){
        dispatch({
          type: GETALL_TABLES,
          payload: [],
        });
      }
    });
};

export const UpdateTablesAction = (data) => (dispatch, getState) => {
  const array = getState().table.allArray;
  array.map((info, i) => {
    if (data.id === info.id) {
      array.splice(i, 1)
      dispatch({
        type: POST_TABLES,
        payload: data,
      });
    };
  });
};

export const DeleteTablesAction = (data) => (dispatch, getState) => {
  const array = getState().table.allArray;
  array.map((info, i) => {
    if (data.id === info.id) {
      array.splice(i, 1)
      dispatch({
        type: GETALL_TABLES,
        payload: array,
      });
    };
  });
};
