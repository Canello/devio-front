import * as uuid from "uuid";
import { InputContainer, InputStyled, Label } from "./Input.styles";
import { Spacer } from "../Spacer/Spacer.component";

export const Input = ({ className, label, ...otherProps }) => {
    const id = uuid.v4();

    return (
        <InputContainer className={className}>
            {label ? (
                <>
                    <Label htmlFor={id}>{label}</Label>
                    <Spacer y={4} />
                </>
            ) : null}
            <InputStyled id={id} {...otherProps}></InputStyled>
        </InputContainer>
    );
};
