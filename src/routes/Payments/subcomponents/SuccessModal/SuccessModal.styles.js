import styled from "styled-components";
import { Modal } from "../../../../components/Modal/Modal.component";

export const SuccessModalStyled = styled(Modal)``;

export const SuccessModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    min-width: 160px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    color: var(--neutral-8);
    text-align: center;
`;

export const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    color: var(--neutral-8);
    text-align: center;
`;
