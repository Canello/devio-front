import styled from "styled-components";

export const NavbarStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
    width: 100vw;
    padding: 8px 32px;
    background-color: var(--green-2);
    z-index: 99;

    @media screen and (max-width: 576px) {
        justify-content: center;
        bottom: 0;
    }
`;

export const LogoText = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: var(--neutral-1);

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const NavigationLinksContainer = styled.nav`
    display: flex;
    gap: 8px;

    @media screen and (max-width: 576px) {
        gap: none;
        justify-content: space-between;
        width: 100%;
        max-width: 360px;
    }
`;

export const NavigationLink = styled.div`
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${({ isActive }) =>
        isActive ? "var(--green-1)" : "var(--green-2)"};
    font-size: 10px;
    font-weight: 600;
    color: var(--neutral-1);
    transition: background-color 200ms linear;

    &:hover {
        cursor: pointer;
    }
`;
