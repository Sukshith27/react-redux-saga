import { ADD_TO_CHART, EMPTY_CHART, REMOVE_TO_CHART } from "./constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CHART:
      console.log("reducer called", action);
      return [action.data, ...data];
    case REMOVE_TO_CHART:
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case EMPTY_CHART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
