import { useState } from "react";
import * as uuid from "uuid";
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
import HamburguerImage from "../../assets/images/category-combos.png";
import { CATEGORIES } from "../../utils/constants";

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

export const Kitchen = () => {
    const [isShowingPreparingList, setIsShowingPreparingList] = useState(true);
    const toggle = () => setIsShowingPreparingList(!isShowingPreparingList);

    const [ordersBeingPrepared, setOrdersBeingPrepared] = useState(ORDERS);
    const [ordersReady, setOrdersReady] = useState(ORDERS);

    const ordersBeingPreparedCards = ordersBeingPrepared.map((order) => (
        <OrderCard key={uuid.v4()} order={order} />
    ));
    const ordersReadyCards = ordersReady.map((order) => (
        <OrderCard key={uuid.v4()} order={order} isReady={true} />
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
