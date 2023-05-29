import styled from "styled-components";

export const PaymentCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid var(--neutral-5);
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    height: 32px;
`;

export const PaymentName = styled.span`
    font-size: 18px;
    font-weight: 900;
    color: var(--neutral-8);
`;
