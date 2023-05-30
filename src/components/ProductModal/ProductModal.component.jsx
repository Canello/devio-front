import { useContext, useEffect, useState } from "react";
import { Spacer } from "../Spacer/Spacer.component";
import {
    BackgroundPattern,
    ButtonsContainer,
    ModalButton,
    NotesInput,
    PlusMinusIcon,
    ProductContainer,
    ProductDescription,
    ProductImage,
    ProductImageContainer,
    ProductInfoContainer,
    ProductModalStyled,
    ProductName,
    ProductPrice,
    ProductTextInfoContainer,
    QuantityButton,
    QuantityContainer,
    QuantityText,
    QuantityWrapper,
    SectionTitle,
    Title,
    WhiteBackground,
} from "./ProductModal.styles";
import Pattern from "../../assets/images/burger-pattern.png";
import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";
import { formatPrice } from "../../utils/functions";
import { OrderSummary } from "../OrderSummary/OrderSummary.component";
import { CartContext } from "../../contexts/cart.context";
import { API_ADDRESS } from "../../utils/constants";

export const ProductModal = ({ isShowing, onClose, product }) => {
    const { notes, onNotesChange, setItem, getItem } = useContext(CartContext);

    // Keep track of quantity
    const [quantity, setQuantity] = useState(0);
    const addProduct = () => setQuantity(quantity + 1);
    const removeProduct = () => {
        if (quantity < 1) return;
        setQuantity(quantity - 1);
    };
    const setQuantityOnModalOpening = () => {
        if (!product) return;
        const item = getItem(product._id);
        const quantityToSet = item?.quantity ? item.quantity : 0;
        setQuantity(quantityToSet);
    };
    useEffect(() => {
        setQuantityOnModalOpening();
    }, [product]);

    // Add item to cart
    const addToOrder = () => setItem(product, quantity);

    if (!product) return null;
    return (
        <ProductModalStyled isShowing={isShowing} onClose={onClose}>
            <Title>Revise seu pedido!</Title>
            <Spacer y={48} />
            <ProductContainer>
                <ProductInfoContainer>
                    <ProductImageContainer>
                        <BackgroundPattern
                            src={Pattern}
                            alt="Background com desenho de comidas"
                        />
                        <WhiteBackground />
                        <ProductImage
                            src={API_ADDRESS + product?.imageUrl}
                            alt="Imagem do produto"
                        />
                    </ProductImageContainer>
                    <Spacer x={32} />
                    <ProductTextInfoContainer>
                        <ProductName>{product.name}</ProductName>
                        <Spacer y={4} />
                        <ProductDescription>
                            {product.description}
                        </ProductDescription>
                        <Spacer y={8} />
                        <QuantityWrapper>
                            <QuantityContainer>
                                <QuantityButton onClick={removeProduct}>
                                    <PlusMinusIcon src={Minus} />
                                </QuantityButton>
                                <Spacer x={8} />
                                <QuantityText>{quantity}</QuantityText>
                                <Spacer x={8} />
                                <QuantityButton onClick={addProduct}>
                                    <PlusMinusIcon src={Plus} />
                                </QuantityButton>
                            </QuantityContainer>
                        </QuantityWrapper>
                    </ProductTextInfoContainer>
                </ProductInfoContainer>
                <ProductPrice>
                    R$ {formatPrice(product.price * quantity)}
                </ProductPrice>
            </ProductContainer>
            <Spacer y={48} />
            <SectionTitle>Observações</SectionTitle>
            <Spacer y={8} />
            <NotesInput
                placeholder="Adicione uma observação ao pedido"
                value={notes}
                onChange={onNotesChange}
            />
            <Spacer y={48} />
            <OrderSummary />
            <Spacer y={48} />
            <ButtonsContainer>
                <ModalButton variant="secondary" onClick={onClose}>
                    Continuar adicionando
                </ModalButton>
                <ModalButton variant="primary" onClick={addToOrder}>
                    Adicionar ao pedido
                </ModalButton>
            </ButtonsContainer>
        </ProductModalStyled>
    );
};
