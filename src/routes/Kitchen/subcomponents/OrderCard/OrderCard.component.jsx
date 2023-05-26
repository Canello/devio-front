import {
    ButtonsContainer,
    CustomerName,
    InfoContainer,
    OrderContent,
    OrderCardStyled,
    ProductImage,
    TextContainer,
    NotesContainer,
    NotesTitle,
    Notes,
    MainContainer,
} from "./OrderCard.styles";
import { IconButton } from "../IconButton/IconButton.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";

export const OrderCard = ({ order, isReady = false }) => {
    const { product, id, quantity, customerName, notes } = order;

    return (
        <OrderCardStyled isReady={isReady}>
            <MainContainer>
                <InfoContainer>
                    <ProductImage src={product.image} />
                    <TextContainer>
                        <CustomerName>{id + " - " + customerName}</CustomerName>
                        <OrderContent>
                            {quantity + "x " + product.name}
                        </OrderContent>
                    </TextContainer>
                </InfoContainer>
                <ButtonsContainer>
                    <IconButton variant="cancel" />
                    {isReady ? null : <IconButton variant="confirm" />}
                </ButtonsContainer>
            </MainContainer>
            {notes && !isReady ? (
                <>
                    <Spacer y={16} />
                    <NotesContainer>
                        <NotesTitle>Observações:</NotesTitle>
                        <Spacer y={4} />
                        <Notes>{notes}</Notes>
                    </NotesContainer>
                </>
            ) : null}
        </OrderCardStyled>
    );
};
