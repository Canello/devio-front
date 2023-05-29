import { API_ADDRESS } from "../utils/constants";

export const getAllProducts = async () => {
    const response = await fetch(API_ADDRESS + "/products");
    const responseJson = await response.json();

    return responseJson.data.products;
};
