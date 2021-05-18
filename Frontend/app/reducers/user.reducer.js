import axios from "axios";
import jwt from "jsonwebtoken";
import Cookies from 'universal-cookie';
import {HYDRATE} from 'next-redux-wrapper';
axios.defaults.withCredentials = true;
const cookies = new Cookies();

// const
const dataInitial = {
  user: {},
};

// types
const INFO_USER = "@USER/INFO";

// reducer
export default function userReducer(state = dataInitial, action) {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    case INFO_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// actions
export const infoUserAction = () => async (dispatch, getState) => {
    const cookie = cookies.get('Authorization');
    const info = getState().owner.user
    if (cookie && info.id === undefined)
    {
      const token = cookie.substring(7, cookie.length);
      const owner = jwt.verify(token, process.env.secret_jwt).owner;
      dispatch({
        type: INFO_USER,
        payload: owner,
      });
    }
};
