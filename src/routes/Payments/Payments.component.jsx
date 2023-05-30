import { useContext, useEffect, useState } from "react";
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
import {
    onlyNumbers,
    currencyToNumber,
    floatToCurrency,
    inputToCurrency,
} from "../../utils/functions";

export const Payments = () => {
    // Inputs
    const [paymentType, setPaymentType] = useState(PAYMENT_TYPES.cash);
    const [customerName, setCustomerName] = useState("");
    const [code, setCode] = useState("");
    const onChangeCustomerName = (event) => setCustomerName(event.target.value);
    const onChangeCode = (event) => setCode(onlyNumbers(event.target.value));

    // Change calculation
    const [received, setReceived] = useState("0,00");
    const [change, setChange] = useState("");
    const onChangeReceived = (event) =>
        setReceived(inputToCurrency(event.target.value));
    useEffect(() => {
        const change = currencyToNumber(received) - totalPrice;
        setChange(floatToCurrency(change));
    }, [received]);

    // Alerts
    const [customerNameAlert, setCustomerNameAlert] = useState(false);
    const [codeAlert, setCodeAlert] = useState(false);
    const [receivedAlert, setReceivedAlert] = useState(false);

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    // Navigation
    const navigate = useNavigate();
    const goToOrders = () => navigate(PATHS.orders);

    // Submit order
    const { clearCart, notes, items, totalPrice } = useContext(CartContext);
    const [fetchCreateOrder] = useApi(createOrder);
    const validateOrder = () => {
        const isInvalidCustomerName = customerName.length === 0;
        const isInvalidCode = code.length === 0;
        const isInvalidReceived = currencyToNumber(received) - totalPrice < 0;

        if (isInvalidCustomerName) setCustomerNameAlert(true);
        else setCustomerNameAlert(false);

        if (isInvalidCode) setCodeAlert(true);
        else setCodeAlert(false);

        if (isInvalidReceived) setReceivedAlert(true);
        else setReceivedAlert(false);

        return !(isInvalidCustomerName || isInvalidCode || isInvalidReceived);
    };
    const submitOrder = () => {
        const isValid = validateOrder();
        if (!isValid) return;
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
                            alert={customerNameAlert}
                            value={customerName}
                            onChange={onChangeCustomerName}
                        />
                        <CodeInput
                            label="Código"
                            alert={codeAlert}
                            value={code}
                            onChange={onChangeCode}
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
                            alert={receivedAlert}
                            value={received}
                            onChange={onChangeReceived}
                        />
                        <PaymentInput
                            label="Troco"
                            value={change}
                            onChange={() => {}}
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
