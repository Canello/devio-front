import {
    Icon,
    InfoContainer,
    PaymentCardStyled,
    PaymentName,
} from "./PaymentCard.styles";
import { Radio } from "../../../../components/Radio/Radio.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";

export const PaymentCard = ({
    paymentName,
    icon,
    payment,
    paymentSelected,
    setPaymentType,
    ...otherProps
}) => {
    const onClick = () => setPaymentType(payment);

    return (
        <PaymentCardStyled onClick={onClick} {...otherProps}>
            <InfoContainer>
                <Icon src={icon} />
                <Spacer x={4} />
                <PaymentName>{paymentName}</PaymentName>
            </InfoContainer>
            <Radio size={24} isChecked={payment === paymentSelected} />
        </PaymentCardStyled>
    );
};
