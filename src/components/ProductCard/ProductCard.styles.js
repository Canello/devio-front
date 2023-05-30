import styled from "styled-components";

export const ProductCardStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 232px;
    border-radius: 16px 16px 20px 20px; // Bigger radius on bottom borders to prevent them from appearing behind InfoContainer
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);
    background-color: var(--red-1);

    &:hover {
        cursor: pointer;
    }
`;

export const BackgroundPattern = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 16px 16px 20px 20px; // Bigger radius on bottom borders to prevent them from appearing behind InfoContainer
    opacity: 0.25;
    object-fit: cover;
`;

export const InfoContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 148px;
    border-radius: 16px;
    background-color: var(--neutral-1);
`;

export const ProductImage = styled.img`
    position: absolute;
    top: -76px;
    height: 120px;
`;

export const InfoText = styled.span`
    max-width: 148px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ProductName = styled(InfoText)`
    font-size: 14px;
    font-weight: 900;
    color: var(--neutral-7);
`;

export const ProductDescription = styled(InfoText)`
    font-size: 12px;
    font-weight: 500;
    color: var(--neutral-7);
`;

export const ProductPrice = styled(InfoText)`
    font-size: 14px;
    font-weight: 900;
    color: var(--neutral-7);
`;
