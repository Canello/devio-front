import {
    BackgroundPattern,
    InfoContainer,
    ProductCardStyled,
    ProductDescription,
    ProductImage,
    ProductName,
    ProductPrice,
} from "./ProductCard.styles";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import Pattern from "../../../../assets/images/burger-pattern.png";

export const ProductCard = ({ product }) => {
    return (
        <ProductCardStyled>
            <BackgroundPattern
                src={Pattern}
                alt="Background com desenho de comidas"
            />
            <Spacer y={64} />
            <InfoContainer>
                <ProductImage src={product.image} />
                <Spacer y={44} />
                <ProductName>{product.name}</ProductName>
                <Spacer y={4} />
                <ProductDescription>{product.description}</ProductDescription>
                <Spacer y={24} />
                <ProductPrice>R$ {product.price}</ProductPrice>
            </InfoContainer>
        </ProductCardStyled>
    );
};
