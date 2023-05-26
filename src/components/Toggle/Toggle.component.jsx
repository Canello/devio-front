import { Highlight, Side, ToggleStyled } from "./Toggle.styles";

export const Toggle = ({
    isOn = false,
    labelOn,
    labelOff,
    onClick = () => {},
    onClickOn = () => {},
    onClickOff = () => {},
    ...otherProps
}) => {
    return (
        <ToggleStyled onClick={onClick} {...otherProps}>
            <Highlight isRightSide={isOn} />
            <Side isActive={!isOn} onClick={onClickOff}>
                {labelOff}
            </Side>
            <Side isActive={isOn} onClick={onClickOn}>
                {labelOn}
            </Side>
        </ToggleStyled>
    );
};
