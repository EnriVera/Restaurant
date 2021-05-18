import axios from "axios";
axios.defaults.withCredentials = true;
import {HYDRATE} from 'next-redux-wrapper';
// const
const dataInitial = {
  array: [],
  active: {},
};

// types
const ALL_RESTAURANT = "@RESTAURANT/ALL";
const ACTIVE_RESTAURANT = "@RESTAURANT/ACTIVE";

// reducer
export default function restaurantReducer(state = dataInitial, action) {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case ALL_RESTAURANT:
      return { ...state, array: action.payload };
    case ACTIVE_RESTAURANT:
        const activeRestaurant = state.array.find(data => data.id === action.payload)
        return { ...state, active: activeRestaurant };
    default:
      return state;
  }
}

// actions
export const obtenerAllRestaurantAction = () => async (dispatch, getState) => {
  await axios
    .get(`${process.env.url_restaurant}restaurant/all-restaurant`, {
      withCredentials: true,
    })
    .then(({ data }) => {
      dispatch({
        type: ALL_RESTAURANT,
        payload: data.restaurant,
      });
    })
    .catch((e) => {});
};

export const ActiveRestaurantAction = (idRestaurant) => async (dispatch, getState) => {
  dispatch({
    type: ACTIVE_RESTAURANT,
    payload: idRestaurant,
  });
};
