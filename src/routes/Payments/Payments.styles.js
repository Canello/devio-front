import styled from "styled-components";
import { Button } from "../../components/Button/Button.component";
import { Input } from "../../components/Input/Input.component";

export const PaymentsStyled = styled.div``;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 900;
    color: var(--neutral-8);
`;

export const SectionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 480px;
`;

export const SectionTitle = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: var(--neutral-8);
`;

export const InputsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
`;

export const PaymentInput = styled(Input)`
    flex: 1;
    min-width: 160px;
`;

export const CodeInput = styled(Input)`
    max-width: 120px;
`;

export const PaymentTypes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 24px;
`;

export const PaymentButton = styled(Button)`
    width: 240px;
`;
