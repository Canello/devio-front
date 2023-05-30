import styled from "styled-components";

const BaseButton = styled.button`
    border-radius: 16px;
    height: 40px;
    padding: 0 24px;
    font-size: 14px;
    font-weight: 700;
    transition: opacity 150ms linear;

    &:hover {
        cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
    }
`;

export const PrimaryButton = styled(BaseButton)`
    background-color: ${({ disabled }) =>
        disabled ? "var(--neutral-4)" : "var(--green-2)"};
    color: var(--neutral-1);

    &:hover {
        opacity: ${({ disabled }) => (disabled ? "1" : "0.8")};
    }
`;

export const SecondaryButton = styled(BaseButton)`
    border: ${({ disabled }) =>
        "2px solid " + (disabled ? "var(--neutral-4)" : "var(--green-2)")};
    background-color: var(--neutral-1);
    color: ${({ disabled }) =>
        disabled ? "var(--neutral-4)" : "var(--green-2)"};

    &:hover {
        opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
    }
`;
