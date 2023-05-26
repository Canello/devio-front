import styled from "styled-components";

const BaseIconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    transition: opacity 150ms linear;

    &:hover {
        opacity: 0.6;
    }
`;

export const ConfirmIconButton = styled(BaseIconButton)`
    background-color: var(--green-3);
`;

export const CancelIconButton = styled(BaseIconButton)`
    background-color: var(--red-2);
`;

export const ConfirmIcon = styled.img`
    height: 14px;
`;

export const CancelIcon = styled.img`
    height: 12px;
`;
