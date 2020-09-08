/* Reducer file to manage state */

import { API_START, API_SUCCESS, API_FAIL } from "../constants";

const initialState = {
  isLoading: false,
  gitHubData: [],
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case API_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gitHubData: [...state.gitHubData, payload],
        error: null,
      };
    case API_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
