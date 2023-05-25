import styled from "styled-components";
import { Input } from "../../components/Input/Input.component";
import { Button } from "../../components/Button/Button.component";

export const OrdersStyled = styled.div``;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Searchbar = styled(Input)`
    max-width: 280px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 32px;

    @media screen and (max-width: 576px) {
        gap: 8px;
    }
`;

export const OrderButton = styled(Button)`
    width: 100%;
    max-width: 240px;
    height: 44px;
`;
