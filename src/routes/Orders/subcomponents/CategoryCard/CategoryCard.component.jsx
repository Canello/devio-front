import { Spacer } from "../../../../components/Spacer/Spacer.component";
import {
    CategoryCardStyled,
    CategoryImage,
    CategoryName,
} from "./CategoryCard.styles";

export const CategoryCard = ({ categoryInfo, ...otherProps }) => {
    return (
        <CategoryCardStyled {...otherProps}>
            <CategoryImage
                src={categoryInfo.image}
                alt={"Thumbnail da categoria " + categoryInfo.name}
            />
            <Spacer y={8} />
            <CategoryName>{categoryInfo.name}</CategoryName>
        </CategoryCardStyled>
    );
};
