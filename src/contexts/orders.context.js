import { createContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi.hook";
import { getAllOrders } from "../services/orders.service";
import { ORDER_STATUSES } from "../utils/constants";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [ordersBeingPrepared, setOrdersBeingPrepared] = useState([]);
    const [ordersReady, setOrdersReady] = useState([]);

    const [fetchOrders, orders] = useApi(getAllOrders, { initialData: [] });

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

    const value = { ordersBeingPrepared, ordersReady, fetchOrders };

    return (
        <OrdersContext.Provider value={value}>
            {children}
        </OrdersContext.Provider>
    );
};
