import { useContext, useEffect, useState } from "react";
import * as uuid from "uuid";
import {
    Divisor,
    List,
    ListContainer,
    PickupStyled,
    PickupToggle,
    PreparingCard,
    ReadyCard,
    Title,
} from "./Pickup.styles";
import { CATEGORIES } from "../../utils/constants";
import HamburguerImage from "../../assets/images/category-combos.png";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { OrdersContext } from "../../contexts/orders.context";

const ORDERS = [
    {
        id: 1,
        customerName: "Ricardo",
        quantity: 1,
        notes: "Sem pícles.",
        product: {
            name: "Hamburguer",
            description: "200g de carne",
            price: "30,50",
            image: HamburguerImage,
            category: CATEGORIES.combos,
        },
    },
    {
        id: 1,
        customerName: "Ricardooooooooooooooooooo",
        quantity: 1,
        notes: "",
        product: {
            name: "Hamburguer",
            description: "200g de carne",
            price: "30,50",
            image: HamburguerImage,
            category: CATEGORIES.combos,
        },
    },
];

export const Pickup = () => {
    const [isShowingPreparingList, setIsShowingPreparingList] = useState(true);
    const toggle = () => setIsShowingPreparingList(!isShowingPreparingList);

    const { ordersBeingPrepared, ordersReady, fetchOrders } =
        useContext(OrdersContext);

    const ordersBeingPreparedCards = ordersBeingPrepared.map((order) => (
        <PreparingCard key={uuid.v4()}>{order.customerName}</PreparingCard>
    ));
    const ordersReadyCards = ordersReady.map((order) => (
        <ReadyCard key={uuid.v4()}>{order.customerName}</ReadyCard>
    ));

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <PickupStyled className="page">
            <PickupToggle
                isOn={!isShowingPreparingList}
                labelOn="Pronto"
                labelOff="Preparando"
                onClick={toggle}
            />
            <ListContainer isShowing={isShowingPreparingList}>
                <Title>Preparando:</Title>
                <Spacer y={32} />
                <List>{ordersBeingPreparedCards}</List>
            </ListContainer>
            <Divisor />
            <ListContainer isShowing={!isShowingPreparingList}>
                <Title>Pronto:</Title>
                <Spacer y={32} />
                <List>{ordersReadyCards}</List>
            </ListContainer>
        </PickupStyled>
    );
};
