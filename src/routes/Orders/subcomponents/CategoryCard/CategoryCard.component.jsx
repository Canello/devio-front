import { Spacer } from "../../../../components/Spacer/Spacer.component";
import {
    CategoryCardStyled,
    CategoryImage,
    CategoryName,
} from "./CategoryCard.styles";

export const CategoryCard = ({ category }) => {
    return (
        <CategoryCardStyled>
            <CategoryImage
                src={category.image}
                alt={"Thumbnail da categoria " + category.name}
            />
            <Spacer y={8} />
            <CategoryName>{category.name}</CategoryName>
        </CategoryCardStyled>
    );
};
