import { API_ADDRESS } from "../utils/constants";

export const getAllOrders = async () => {
    const response = await fetch(API_ADDRESS + "/orders");
    const responseJson = await response.json();

    return responseJson.data.orders;
};
