import { useContext, useEffect, useState } from "react";
import {
    Divisor,
    KitchenStyled,
    KitchenToggle,
    List,
    ListContainer,
    Title,
} from "./Kitchen.styles";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { OrderCard } from "./subcomponents/OrderCard/OrderCard.component";
import { OrdersContext } from "../../contexts/orders.context";
import { useApi } from "../../hooks/useApi.hook";
import { updateOrderStatus, deleteOrder } from "../../services/orders.service";
import { ORDER_STATUSES } from "../../utils/constants";

export const Kitchen = () => {
    const [isShowingPreparingList, setIsShowingPreparingList] = useState(true);
    const toggle = () => setIsShowingPreparingList(!isShowingPreparingList);

    const {
        ordersBeingPrepared,
        ordersReady,
        fetchOrders,
        setOrderAsReady,
        removeOrder,
    } = useContext(OrdersContext);

    const [fetchUpdateOrderToReady] = useApi(updateOrderStatus);
    const [fetchUpdateOrderToPickedUp] = useApi(updateOrderStatus);
    const [fetchDeleteOrder] = useApi(deleteOrder);
    const updateOrderToReady = (_id) => {
        fetchUpdateOrderToReady(_id, ORDER_STATUSES.ready);
        setOrderAsReady(_id);
    };
    const updateOrderToPickedUp = (_id) => {
        fetchUpdateOrderToPickedUp(_id, ORDER_STATUSES.pickedUp);
        removeOrder(_id);
    };
    const updateOrderToDeleted = (_id) => {
        fetchDeleteOrder(_id);
        removeOrder(_id);
    };

    const ordersBeingPreparedCards = ordersBeingPrepared.map((order) => (
        <OrderCard
            key={order._id}
            order={order}
            onClickOk={() => updateOrderToReady(order._id)}
            onClickCancel={() => updateOrderToDeleted(order._id)}
        />
    ));
    const ordersReadyCards = ordersReady.map((order) => (
        <OrderCard
            key={order._id}
            order={order}
            isReady={true}
            onClickCancel={() => updateOrderToPickedUp(order._id)}
        />
    ));

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <KitchenStyled className="page">
            <KitchenToggle
                isOn={!isShowingPreparingList}
                labelOn="Pronto"
                labelOff="Preparando"
                onClick={toggle}
            />
            <ListContainer isShowing={isShowingPreparingList}>
                <Title>Preparando:</Title>
                <Spacer y={24} />
                <List>{ordersBeingPreparedCards}</List>
            </ListContainer>
            <Divisor />
            <ListContainer isShowing={!isShowingPreparingList}>
                <Title>Pronto:</Title>
                <Spacer y={24} />
                <List>{ordersReadyCards}</List>
            </ListContainer>
        </KitchenStyled>
    );
};
