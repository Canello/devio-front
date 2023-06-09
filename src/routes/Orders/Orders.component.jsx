import { useContext } from "react";
import {
    ButtonsContainer,
    OrderButton,
    OrdersStyled,
    Searchbar,
    Title,
} from "./Orders.styles";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { Categories } from "./subcomponents/Categories/Categories.component";
import { Products } from "../../components/Products/Products.component";
import { ProductsContext } from "../../contexts/products.context";
import { useSearchProducts } from "../../hooks/useSearchProducts.hook";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { CartContext } from "../../contexts/cart.context";

export const Orders = () => {
    const { products, isLoadingProducts } = useContext(ProductsContext);
    const { search, onSearchChange, searchedProducts } =
        useSearchProducts(products);

    const navigate = useNavigate();
    const goToPayments = () => navigate(PATHS.payments);

    const { clearCart, items } = useContext(CartContext);

    return (
        <OrdersStyled className="page">
            <Title>Seja bem vindo!</Title>
            <Spacer y={12} />
            <Searchbar
                placeholder="O que você procura?"
                value={search}
                onChange={onSearchChange}
            />
            <Spacer y={64} />
            {search.length > 0 ? null : (
                <>
                    <Categories />
                    <Spacer y={64} />
                </>
            )}
            <Products
                products={search.length ? searchedProducts : products}
                isLoadingProducts={isLoadingProducts}
            />
            <Spacer y={64} />
            <ButtonsContainer>
                <OrderButton
                    variant="secondary"
                    disabled={items.length === 0}
                    onClick={clearCart}
                >
                    Cancelar
                </OrderButton>
                <OrderButton
                    variant="primary"
                    disabled={items.length === 0}
                    onClick={goToPayments}
                >
                    Finalizar Pedido
                </OrderButton>
            </ButtonsContainer>
        </OrdersStyled>
    );
};
