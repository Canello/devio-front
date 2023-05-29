import { useContext, useState } from "react";
import {
    ButtonsContainer,
    CodeInput,
    InputsContainer,
    PaymentButton,
    PaymentInput,
    PaymentTypes,
    PaymentsStyled,
    Section,
    SectionTitle,
    SectionsContainer,
    Title,
} from "./Payments.styles";
import { Input } from "../../components/Input/Input.component";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { PaymentCard } from "./subcomponents/PaymentCard/PaymentCard.component";
import { PATHS, PAYMENT_TYPES } from "../../utils/constants";
import CashIcon from "../../assets/icons/money.svg";
import CreditCardIcon from "../../assets/icons/credit-card.svg";
import { useApi } from "../../hooks/useApi.hook";
import { createOrder } from "../../services/orders.service";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { SuccessModal } from "./subcomponents/SuccessModal/SuccessModal.component";

export const Payments = () => {
    const [paymentType, setPaymentType] = useState(PAYMENT_TYPES.cash);
    const [customerName, setCustomerName] = useState("");
    const [code, setCode] = useState("");
    const [received, setReceived] = useState("");
    const [change, setChange] = useState("");
    const onChange = (setFn) => (event) => setFn(event.target.value);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    const navigate = useNavigate();
    const goToOrders = () => navigate(PATHS.orders);

    const { clearCart, notes, items } = useContext(CartContext);
    const [fetchCreateOrder] = useApi(createOrder);
    const submitOrder = () => {
        fetchCreateOrder({
            code,
            customerName,
            notes,
            content: items,
            paymentType,
            received,
            change,
        });
        clearCart();
        openModal();
    };

    return (
        <PaymentsStyled className="page">
            <Title>Pagamento</Title>
            <Spacer y={32} />
            <SectionsContainer>
                <Section>
                    <SectionTitle>Resumo da compra</SectionTitle>
                    <Spacer y={16} />
                    <OrderSummary />
                    <Spacer y={24} />
                    <InputsContainer>
                        <PaymentInput
                            label="Nome do cliente"
                            placeholder="Primeiro nome"
                            value={customerName}
                            onChange={onChange(setCustomerName)}
                        />
                        <CodeInput
                            label="Código"
                            value={code}
                            onChange={onChange(setCode)}
                        />
                    </InputsContainer>
                </Section>
                <Section>
                    <SectionTitle>Selecione a forma de pagamento:</SectionTitle>
                    <Spacer y={16} />
                    <PaymentTypes>
                        <PaymentCard
                            icon={CashIcon}
                            paymentName="Débito"
                            payment={PAYMENT_TYPES.debt}
                            paymentSelected={paymentType}
                            setPaymentType={setPaymentType}
                        />
                        <PaymentCard
                            icon={CreditCardIcon}
                            paymentName="Crédito"
                            payment={PAYMENT_TYPES.credit}
                            paymentSelected={paymentType}
                            setPaymentType={setPaymentType}
                        />
                        <PaymentCard
                            icon={CreditCardIcon}
                            paymentName="Dinheiro"
                            payment={PAYMENT_TYPES.cash}
                            paymentSelected={paymentType}
                            setPaymentType={setPaymentType}
                        />
                    </PaymentTypes>
                    <Spacer y={24} />
                    <InputsContainer>
                        <PaymentInput
                            label="Valor entregue"
                            value={received}
                            onChange={onChange(setReceived)}
                        />
                        <PaymentInput
                            label="Troco"
                            value={change}
                            onChange={onChange(setChange)}
                        />
                    </InputsContainer>
                </Section>
            </SectionsContainer>
            <Spacer y={48} />
            <ButtonsContainer>
                <PaymentButton variant="secondary" onClick={goToOrders}>
                    Cancelar
                </PaymentButton>
                <PaymentButton variant="primary" onClick={submitOrder}>
                    Finalizar pedido
                </PaymentButton>
            </ButtonsContainer>
            <SuccessModal isShowing={isModalOpen} onClose={goToOrders} />
        </PaymentsStyled>
    );
};
