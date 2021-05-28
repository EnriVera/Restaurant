import { AxiosR, AxiosW } from "../models/Axios";
import { HYDRATE } from "next-redux-wrapper";

// const
const dataInitial = {
  allArray: [],
  active: {},
  tables: [],
};

// types
const GETALL_WAITER = "@WAITER/GETALL";
const POST_WAITER = "@WAITER/POST";
const ACTIVE_WAITER = "@WAITER/ACTIVE";
const GETALL_TABLES = "@TABLES/GETALL";

// reducer
export default function waiterReducer(state = dataInitial, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case GETALL_WAITER:
      return { ...state, allArray: action.payload };
    case POST_WAITER:
      return { ...state, allArray: [...state.allArray, action.payload] };
    case ACTIVE_WAITER:
      return { ...state, active: action.payload };
    case GETALL_TABLES:
      return { ...state, tables: action.payload };
    default:
      return state;
  }
}

// actions
export const GetAllWiterAction = (router) => (dispatch, getState) => {
  const restaurant = getState().restaurant.active;
  AxiosR(router)
    .get(`waiter/all-waiter?restaurant=${restaurant.id}`)
    .then(({ data }) => {
      console.log(data);
      dispatch({
        type: GETALL_WAITER,
        payload: data,
      });
    })
    .catch((e) => {
      if (e.response.status === 404) {
        dispatch({
          type: GETALL_WAITER,
          payload: [],
        });
      }
    });
};

export const ActiveWaiter = (waiter, router) => (dispatch, getState) => {
  dispatch({
    type: ACTIVE_WAITER,
    payload: waiter,
  });

  if (waiter) {
    AxiosW(router)
      .get(`tables/all-waiter-table?idWaiter=${waiter.id}`)
      .then(({ data }) => {
          console.log(data)
        dispatch({
          type: GETALL_TABLES,
          payload: data,
        });
      })
      .catch((e) => {
        if (e.response.status === 404) {
          dispatch({
            type: GETALL_TABLES,
            payload: [],
          });
        }
      });
  }
};

export const UpdateWaiterAction = (data) => (dispatch, getState) => {
  const array = getState().waiter.allArray;
  array.map((info, i) => {
    if (data.id === info.id) {
      array.splice(i, 1);
      dispatch({
        type: POST_WAITER,
        payload: data,
      });
    }
  });
};

export const DeleteWiterAction = (data) => (dispatch, getState) => {
  const array = getState().waiter.allArray;
  array.map((info, i) => {
    if (data.id === info.id) {
      array.splice(i, 1);
      dispatch({
        type: GETALL_WAITER,
        payload: array,
      });
    }
  });
};
