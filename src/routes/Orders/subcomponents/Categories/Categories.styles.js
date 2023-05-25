import styled from "styled-components";

export const CategoriesStyled = styled.div``;

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

export const CategoriesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 60px;
`;
