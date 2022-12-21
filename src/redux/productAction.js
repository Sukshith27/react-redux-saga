import { PRODUCT_LIST } from "./constants";

export const productList = () => {
  let data = "hello";
  console.log("action is called", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
