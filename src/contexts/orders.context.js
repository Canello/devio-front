import { createContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi.hook";
import { getAllOrders } from "../services/orders.service";
import { ORDER_STATUSES } from "../utils/constants";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [ordersBeingPrepared, setOrdersBeingPrepared] = useState([]);
    const [ordersReady, setOrdersReady] = useState([]);

    const [fetchOrders, orders, isLoadingOrders, ordersError, setOrders] =
        useApi(getAllOrders, { initialData: [] });

    const setOrderAsReady = (_id) => {
        const updatedOrders = orders.map((order) => {
            const updatedOrder = { ...order };
            if (order._id === _id) {
                updatedOrder.status = ORDER_STATUSES.ready;
            }
            return updatedOrder;
        });
        setOrders(updatedOrders);
    };

    const removeOrder = (_id) => {
        const updatedOrders = orders.filter((order) => order._id !== _id);
        setOrders(updatedOrders);
    };

    const updateOrders = () => {
        const ordersBeingPrepared = orders.filter(
            (order) => order.status === ORDER_STATUSES.preparing
        );
        const ordersReady = orders.filter(
            (order) => order.status === ORDER_STATUSES.ready
        );
        setOrdersBeingPrepared(ordersBeingPrepared);
        setOrdersReady(ordersReady);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        updateOrders();
    }, [orders]);

    const value = {
        ordersBeingPrepared,
        ordersReady,
        fetchOrders,
        setOrderAsReady,
        removeOrder,
    };

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    );
};
