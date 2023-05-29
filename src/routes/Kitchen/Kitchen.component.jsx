import { useContext, useState } from "react";
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

export const Kitchen = () => {
    const [isShowingPreparingList, setIsShowingPreparingList] = useState(true);
    const toggle = () => setIsShowingPreparingList(!isShowingPreparingList);

    const { ordersBeingPrepared, ordersReady } = useContext(OrdersContext);

    const ordersBeingPreparedCards = ordersBeingPrepared.map((order) => (
        <OrderCard key={order._id} order={order} />
    ));
    const ordersReadyCards = ordersReady.map((order) => (
        <OrderCard key={order._id} order={order} isReady={true} />
    ));

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
