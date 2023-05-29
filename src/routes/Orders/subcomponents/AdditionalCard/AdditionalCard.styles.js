import styled from "styled-components";

export const AdditionalCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 12px;
    background-color: var(--neutral-1);
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);
`;

export const Image = styled.img`
    height: 80px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.span`
    font-size: 16px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const Description = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: var(--neutral-8);
`;

export const Price = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: var(--neutral-5);
`;
