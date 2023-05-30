import { useState } from "react";
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
import { Spacer } from "../Spacer/Spacer.component";
import { ProductCard } from "../ProductCard/ProductCard.component";
import PlaceholderImage from "../../assets/images/empty-placeholder.png";
import { ProductModal } from "../ProductModal/ProductModal.component";

export const Products = ({ products, isLoadingProducts }) => {
    const [modalProduct, setModalProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (product) => {
        setModalProduct(product);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setModalProduct(null);
    };

    const productCards = products.map((product) => (
        <ProductCard
            key={uuid.v4()}
            product={product}
            onClick={() => openModal(product)}
        />
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
            <ProductModal
                isShowing={isModalOpen}
                product={modalProduct}
                onClose={closeModal}
            />
        </ProductsStyled>
    );
};
