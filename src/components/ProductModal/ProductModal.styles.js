import styled from "styled-components";
import { MultilineInput } from "../MultilineInput/MultilineInput.component";
import { Button } from "../Button/Button.component";
import { Modal } from "../Modal/Modal.component";

const quantityButtonRadius = "36px";

export const ProductModalStyled = styled(Modal)`
    width: calc(100% - 48px);
    max-width: 800px;

    @media screen and (max-width: 400px) {
        padding-left: 32px;
        padding-right: 32px;
    }
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const ProductInfoContainer = styled.div`
    display: flex;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 8px;
    }
`;

export const ProductImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 140px;
    border-radius: 12px;
    background-color: var(--red-1);
    box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.08);
    overflow: hidden;
`;

export const ProductTextInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
`;

export const ProductImage = styled.img`
    height: 100px;
    z-index: 9;
`;

export const ProductName = styled.span`
    font-size: 16px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const ProductDescription = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: var(--neutral-8);
`;

export const ProductPrice = styled.span`
    font-size: 16px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const BackgroundPattern = styled.img`
    position: absolute;
    width: 100%;
    border-radius: 16px 16px 20px 20px; // Bigger radius on bottom borders to prevent them from appearing behind InfoContainer
    opacity: 0.5;
    object-fit: cover;
`;

export const WhiteBackground = styled.div`
    position: absolute;
    height: 80px;
    width: 100%;
    bottom: 0;
    border-radius: 8px;
    background-color: var(--neutral-1);
`;

export const QuantityWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${quantityButtonRadius};
    border: 2px solid var(--green-2);
`;

export const QuantityButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${quantityButtonRadius};
    width: ${quantityButtonRadius};
    border-radius: 100%;
    background-color: var(--green-2);

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const PlusMinusIcon = styled.img`
    height: 16px;
    width: 16px;
`;

export const QuantityText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--neutral-8);
`;

export const SectionTitle = styled.span`
    font-size: 16px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const NotesInput = styled(MultilineInput)`
    width: 100%;
    height: 120px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 24px;

    @media screen and (max-width: 700px) {
        flex-direction: column-reverse;
        gap: 16px;
    }
`;

export const ModalButton = styled(Button)`
    width: 240px;
    height: 44px;

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;
