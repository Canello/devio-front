import styled from "styled-components";

const BaseButton = styled.button`
    border-radius: 16px;
    height: 40px;
    padding: 0 24px;
    font-size: 14px;
    font-weight: 700;
    transition: opacity 150ms linear;
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: var(--green-2);
    color: var(--neutral-1);

    &:hover {
        opacity: 0.8;
    }
`;

export const SecondaryButton = styled(BaseButton)`
    border: 2px solid var(--green-2);
    background-color: var(--neutral-1);
    color: var(--green-2);

    &:hover {
        opacity: 0.6;
    }
`;
