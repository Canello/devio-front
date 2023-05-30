import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    display: ${({ isShowing }) => (isShowing ? "flex" : "none")};
    justify-content: center;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 64px 0;
    overflow-y: scroll;
`;

export const Content = styled.div`
    position: absolute;
    top: 64px;
    margin: 0 32px;
    padding: 64px;
    border-radius: 16px;
    background-color: var(--neutral-1);
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);
    min-width: 240px;
    z-index: 1000;
`;

export const CloseIcon = styled.img`
    position: absolute;
    height: 20px;
    top: 24px;
    right: 24px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--neutral-9);
    opacity: 0.5;
`;
