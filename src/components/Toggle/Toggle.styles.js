import styled from "styled-components";

export const ToggleStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    max-width: 280px;
    border-radius: 16px;
    background-color: var(--green-3);
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

export const Side = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    color: ${({ isActive }) =>
        isActive ? "var(--neutral-1)" : "var(--green-2);"};
    z-index: 9;
    transition: color 150ms linear;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const Highlight = styled.div`
    position: absolute;
    height: 100%;
    width: 50%;
    border-radius: 16px;
    background-color: var(--green-2);
    left: ${({ isRightSide }) => (isRightSide ? "50%" : "0")};
    transition: left 150ms linear;
`;
