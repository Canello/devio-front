import styled from "styled-components";

export const OrderSummaryStyled = styled.div`
    padding: 40px;
    border: 1px solid var(--neutral-6);
`;

export const Hr = styled.hr`
    border-top: 1px dashed var(--neutral-5);
`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const ItemText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--neutral-5);
`;

export const Total = styled.span`
    font-size: 18px;
    font-weight: 500;
    color: var(--neutral-8);
`;

export const TotalPrice = styled.span`
    font-size: 28px;
    font-weight: 900;
    color: var(--neutral-8);
`;
