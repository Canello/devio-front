import styled from "styled-components";

export const KitchenStyled = styled.div`
    display: flex;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`;

export const ListContainer = styled.div`
    flex: 1;

    @media screen and (max-width: 900px) {
        display: ${({ isShowing }) => (isShowing ? "block" : "none")};
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Divisor = styled.div`
    width: 1px;
    height: 400px;
    margin: 0 32px;
    border-left: 2px solid var(--neutral-8);

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const ReadyContainer = styled.div`
    flex: 1;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
