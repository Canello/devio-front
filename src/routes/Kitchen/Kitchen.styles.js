import styled from "styled-components";
import { Toggle } from "../../components/Toggle/Toggle.component";

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
    font-size: 22px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Divisor = styled.div`
    width: 0px;
    margin: 0 64px;
    border-left: 2px solid var(--neutral-8);

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const KitchenToggle = styled(Toggle)`
    margin-bottom: 48px;

    @media screen and (min-width: 900px) {
        display: none;
    }
`;
