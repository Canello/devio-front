import { Ball, RadioStyled } from "./Radio.style";

export const Radio = ({ onClick, isChecked, size = 20 }) => {
    return (
        <RadioStyled size={size} onClick={onClick}>
            <Ball size={size} isChecked={isChecked} />
        </RadioStyled>
    );
};
