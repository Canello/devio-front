import * as uuid from "uuid";
import {
    EmptyPlaceholderContainer,
    EmptyPlaceholderImage,
    EmptyPlaceholderText,
    ProductsList,
    ProductsStyled,
    Subtitle,
    Title,
} from "./Products.styles";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { ProductCard } from "../ProductCard/ProductCard.component";
import PlaceholderImage from "../../../../assets/images/empty-placeholder.png";

export const Products = ({ products, isLoadingProducts }) => {
    const productCards = products.map((product) => (
        <ProductCard key={uuid.v4()} product={product} />
    ));

    return (
        <ProductsStyled>
            <Title>Produtos</Title>
            <Spacer y={8} />
            <Subtitle>
                Selecione um produto para adicionar ao seu pedido
            </Subtitle>
            <Spacer y={24} />
            {products.length > 0 || isLoadingProducts ? (
                <ProductsList>{productCards}</ProductsList>
            ) : (
                <EmptyPlaceholderContainer>
                    <EmptyPlaceholderImage src={PlaceholderImage} />
                    <Spacer y={8} />
                    <EmptyPlaceholderText>
                        Nenhum produto corresponde à sua busca.
                    </EmptyPlaceholderText>
                </EmptyPlaceholderContainer>
            )}
        </ProductsStyled>
    );
};
