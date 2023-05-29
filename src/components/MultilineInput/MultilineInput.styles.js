import styled from "styled-components";

export const MultilineInputStyled = styled.textarea`
    border-radius: 8px;
    padding: 16px;
    background-color: var(--neutral-2);

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
