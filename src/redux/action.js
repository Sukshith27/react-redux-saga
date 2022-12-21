import { ADD_TO_CHART, EMPTY_CHART, REMOVE_TO_CHART } from "./constants";

export const addToCart = (data) => {
  console.log("action is called", data);
  return {
    type: ADD_TO_CHART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("action remove is called", data);
  return {
    type: REMOVE_TO_CHART,
    data,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CHART,
  };
};
