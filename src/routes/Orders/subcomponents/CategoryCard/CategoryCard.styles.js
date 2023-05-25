import styled from "styled-components";

export const CategoryCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 140px;
    border-radius: 16px;
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);

    &:hover {
        cursor: pointer;
    }
`;

export const CategoryImage = styled.img`
    height: 80px;
`;

export const CategoryName = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: var(--neutral-7);
    text-align: center;
`;
