import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 900;
    color: var(--neutral-7);
`;

export const InputStyled = styled.input`
    height: 36px;
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${({ alert }) =>
        alert ? "var(--red-2)" : "var(--neutral-2)"};

    --placeholder-font-size: 14px;
    --placeholder-font-weight: 500;
    --placeholder-color: var(--neutral-4);

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size: var(--placeholder-font-size);
        font-weight: var(--placeholder-font-weight);
        color: var(--placeholder-color);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        font-size: var(--placeholder-font-size);
        font-weight: var(--placeholder-font-weight);
        color: var(--placeholder-color);
    }

    ::-ms-input-placeholder {
        /* Microsoft Edge */
        font-size: var(--placeholder-font-size);
        font-weight: var(--placeholder-font-weight);
        color: var(--placeholder-color);
    }
`;
