import styled from "styled-components";

export const ProductsStyled = styled.div``;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 900;
    color: var(--neutral-7);
`;

export const Subtitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    color: var(--neutral-7);
`;

export const ProductsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 60px;
`;

export const EmptyPlaceholderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
`;

export const EmptyPlaceholderImage = styled.img`
    height: 104px;
    opacity: 0.6;
`;

export const EmptyPlaceholderText = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: var(--neutral-5);
    text-align: center;
`;
