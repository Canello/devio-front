import styled from "styled-components";
import { Button } from "../../components/Button/Button.component";

export const CategoryStyled = styled.div``;

export const Back = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--neutral-5);

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    color: var(--neutral-8);
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
