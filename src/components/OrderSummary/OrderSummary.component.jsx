import { useContext } from "react";
import * as uuid from "uuid";
import {
    Hr,
    ItemContainer,
    ItemText,
    OrderSummaryStyled,
    Total,
    TotalPrice,
} from "./OrderSummary.styles";
import { CartContext } from "../../contexts/cart.context";
import { Spacer } from "../Spacer/Spacer.component";
import { formatPrice } from "../../utils/functions";

export const OrderSummary = () => {
    const { items, totalPrice } = useContext(CartContext);

    const itemInfos = items.map((item) => (
        <ItemContainer key={uuid.v4()}>
            <ItemText>{item.quantity + "x " + item.product.name}</ItemText>
            <ItemText>
                {formatPrice(item.quantity * item.product.price)}
            </ItemText>
        </ItemContainer>
    ));

    return (
        <OrderSummaryStyled>
            {itemInfos}
            <Spacer y={48} />
            <Hr />
            <Spacer y={16} />
            <Total>Total do pedido:</Total>
            <Spacer y={8} />
            <TotalPrice>R$ {formatPrice(totalPrice)}</TotalPrice>
        </OrderSummaryStyled>
    );
};
