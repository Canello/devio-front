import {
    Image,
    Subtitle,
    SuccessModalStyled,
    Title,
} from "./SuccessModal.styles";
import SuccessImage from "../../../../assets/images/success.png";
import { Spacer } from "../../../../components/Spacer/Spacer.component";

export const SuccessModal = ({ isShowing, onClose }) => {
    return (
        <SuccessModalStyled isShowing={isShowing} onClose={onClose}>
            <Image src={SuccessImage} />
            <Spacer y={16} />
            <Title>Pedido finalizado com sucesso</Title>
            <Spacer y={8} />
            <Subtitle>O pedido foi encaminhado para a cozinha.</Subtitle>
        </SuccessModalStyled>
    );
};
