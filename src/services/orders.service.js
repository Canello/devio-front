import { API_ADDRESS } from "../utils/constants";

export const getAllOrders = async () => {
    const response = await fetch(API_ADDRESS + "/orders");
    const responseJson = await response.json();

    return responseJson.data.orders;
};

export const createOrder = async ({ code, customerName, notes, content }) => {
    const response = await fetch(API_ADDRESS + "/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            code,
            customerName,
            notes,
            content,
        }),
    });
    const responseJson = await response.json();

    return responseJson.data.order;
};
