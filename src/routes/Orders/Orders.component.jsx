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
import { Products } from "./subcomponents/Products/Products.component";
import { ProductsContext } from "../../contexts/products.context";
import { useSearchProducts } from "../../hooks/useSearchProducts.hook";

export const Orders = () => {
    const { products, isLoadingProducts } = useContext(ProductsContext);
    const { search, onSearchChange, searchedProducts } =
        useSearchProducts(products);

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
                <OrderButton variant="secondary">Cancelar</OrderButton>
                <OrderButton variant="primary">Finalizar Pedido</OrderButton>
            </ButtonsContainer>
        </OrdersStyled>
    );
};
