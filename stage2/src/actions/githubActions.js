/* File for action creators */
import { API_START, API_SUCCESS, API_FAIL } from "../constants";
import axios from "axios";

export const apiStart = () => {
  return { type: API_START };
};

export const getGitHubData = (data) => async (dispatch) => {
  dispatch(apiStart());
  setTimeout(async () => {
    try {
      const res = await axios.get(`https://api.github.com/users/${data}`);
      dispatch({
        type: API_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({ type: API_FAIL, payload: e.message });
    }
  }, 2000);
};
