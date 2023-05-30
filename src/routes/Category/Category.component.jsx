import { useContext, useEffect, useState } from "react";
import {
    ButtonsContainer,
    CategoryStyled,
    OrderButton,
    Title,
} from "./Category.styles";
import { Products } from "../../components/Products/Products.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { ProductsContext } from "../../contexts/products.context";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants";

export const Category = ({ category }) => {
    const { products, isLoadingProducts } = useContext(ProductsContext);
    const { clearCart } = useContext(CartContext);

    const navigate = useNavigate();
    const goToPayments = () => navigate(PATHS.payments);
    const goToOrders = () => navigate(PATHS.orders);

    const [categoryProducts, setCategoryProducts] = useState([]);
    const generateCategoryProducts = () => {
        const filteredProducts = products.filter(
            (product) => product.category === category.category
        );
        setCategoryProducts(filteredProducts);
    };

    useEffect(() => {
        generateCategoryProducts();
    }, [products]);

    return (
        <CategoryStyled className="page">
            <Title>{category.name}</Title>
            <Spacer y={32} />
            <Products
                products={categoryProducts}
                isLoadingProducts={isLoadingProducts}
            />
            <Spacer y={64} />
            <ButtonsContainer>
                <OrderButton variant="secondary" onClick={goToOrders}>
                    Voltar
                </OrderButton>
                <OrderButton variant="primary" onClick={goToPayments}>
                    Finalizar Pedido
                </OrderButton>
            </ButtonsContainer>
        </CategoryStyled>
    );
};
