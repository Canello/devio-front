import styled from "styled-components";

export const OrderCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 360px;
    padding: 16px;
    border-radius: 16px;
    border: ${({ isReady }) => (isReady ? "1px solid var(--green-2)" : "none")};
    box-shadow: ${({ isReady }) =>
        isReady
            ? "0px 4px 20px 1px rgba(18,92,19, 0.25)"
            : "0px 4px 20px 1px rgba(0, 0, 0, 0.08)"};
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;

    @media screen and (max-width: 576px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 16px;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    gap: 20px;
`;

export const ProductImage = styled.img`
    height: 56px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    max-width: 120px;
`;

const Text = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CustomerName = styled(Text)`
    font-size: 14px;
    font-weight: 700;
    color: var(--neutral-8);
`;

export const OrderContent = styled(Text)`
    font-size: 12px;
    font-weight: 500;
    color: var(--neutral-5);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;

    @media screen and (max-width: 576px) {
        align-self: flex-end;
    }
`;

export const NotesContainer = styled.div``;

export const NotesTitle = styled.span`
    font-size: 13px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Notes = styled.div`
    min-height: 64px;
    padding: 10px;
    border: 1px solid var(--neutral-5);
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: var(--neutral-8);
`;
