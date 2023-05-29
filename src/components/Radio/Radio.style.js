import styled from "styled-components";

export const RadioStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size}px;
    aspect-ratio: 1;
    border-radius: 100%;
    border: 2px solid var(--green-2);

    &:hover {
        cursor: pointer;
    }
`;

export const Ball = styled.div`
    width: ${({ size }) => size - 8}px;
    aspect-ratio: 1;
    border-radius: 100%;
    background-color: ${({ isChecked }) =>
        isChecked ? "var(--green-2)" : "none"};
`;
