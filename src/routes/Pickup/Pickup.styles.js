import styled from "styled-components";
import { Toggle } from "../../components/Toggle/Toggle.component";

export const PickupStyled = styled.div`
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
    font-size: 40px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Divisor = styled.div`
    width: 0px;
    margin: 0 64px;
    border-left: 4px solid var(--neutral-8);

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

export const Card = styled.span`
    font-size: 64px;
    font-weight: 900;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 576px) {
        font-size: 48px;
    }
`;

export const PreparingCard = styled(Card)`
    color: var(--neutral-5);
`;

export const ReadyCard = styled(Card)`
    color: var(--green-2);
`;

export const PickupToggle = styled(Toggle)`
    margin-bottom: 48px;

    @media screen and (min-width: 900px) {
        display: none;
    }
`;
