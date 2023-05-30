import * as uuid from "uuid";
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
import { API_ADDRESS } from "../../../../utils/constants";

export const OrderCard = ({
    order,
    isReady = false,
    onClickOk = () => {},
    onClickCancel = () => {},
}) => {
    const { content, code, customerName, notes } = order;

    const contentInfo = content.map((item) => (
        <OrderContent key={uuid.v4()}>
            {item.quantity + "x " + item.product.name}
        </OrderContent>
    ));

    console.log(content);

    return (
        <OrderCardStyled isReady={isReady}>
            <MainContainer>
                <InfoContainer>
                    <ProductImage
                        src={API_ADDRESS + content[0]?.product.imageUrl}
                    />
                    <TextContainer>
                        <CustomerName>
                            {code + " - " + customerName}
                        </CustomerName>
                        {contentInfo}
                    </TextContainer>
                </InfoContainer>
                <ButtonsContainer>
                    <IconButton variant="cancel" onClick={onClickCancel} />
                    {isReady ? null : (
                        <IconButton variant="confirm" onClick={onClickOk} />
                    )}
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
