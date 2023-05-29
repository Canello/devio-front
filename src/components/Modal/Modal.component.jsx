import { createPortal } from "react-dom";
import {
    Background,
    CloseIcon,
    Content,
    ModalStyled,
    ModalWrapper,
} from "./Modal.styles";
import Close from "../../assets/icons/close.svg";

export const Modal = ({
    isShowing,
    product,
    onClose,
    children,
    ...otherProps
}) => {
    return createPortal(
        <ModalStyled isShowing={isShowing}>
            <Content {...otherProps}>
                {children}
                <CloseIcon src={Close} onClick={onClose} />
            </Content>
            <Background onClick={onClose} />
        </ModalStyled>,
        document.getElementById("modal-root")
    );
};
