import {
    CategoriesList,
    CategoriesStyled,
    Subtitle,
    Title,
} from "./Categories.styles";
import { CategoryCard } from "../CategoryCard/CategoryCard.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../../../utils/constants";

const CategoryCards = () => {
    const navigate = useNavigate();
    const goTo = (path) => () => navigate(path);

    const cards = Object.values(CATEGORIES).map((categoryInfo) => {
        return (
            <CategoryCard
                key={categoryInfo.name}
                categoryInfo={categoryInfo}
                onClick={goTo(categoryInfo.path)}
            />
        );
    });

    return <>{cards}</>;
};

export const Categories = () => {
    return (
        <CategoriesStyled>
            <Title>Categorias</Title>
            <Spacer y={8} />
            <Subtitle>Navegue por categoria</Subtitle>
            <Spacer y={24} />
            <CategoriesList>
                <CategoryCards />
            </CategoriesList>
        </CategoriesStyled>
    );
};
