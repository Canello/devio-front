import {
    CancelIcon,
    CancelIconButton,
    ConfirmIcon,
    ConfirmIconButton,
} from "./IconButton.styles";
import Cancel from "../../../../assets/icons/cancel.svg";
import Confirm from "../../../../assets/icons/confirm.svg";

export const IconButton = ({ variant = "confirm", ...otherProps }) => {
    if (variant === "confirm") {
        return (
            <ConfirmIconButton {...otherProps}>
                <ConfirmIcon src={Confirm} />
            </ConfirmIconButton>
        );
    } else if (variant === "cancel") {
        return (
            <CancelIconButton {...otherProps}>
                <CancelIcon src={Cancel} />
            </CancelIconButton>
        );
    }
};
