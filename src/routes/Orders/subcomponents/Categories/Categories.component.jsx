import {
    CategoriesList,
    CategoriesStyled,
    Subtitle,
    Title,
} from "./Categories.styles";
import { CategoryCard } from "../CategoryCard/CategoryCard.component";
import { Spacer } from "../../../../components/Spacer/Spacer.component";
import CombosImage from "../../../../assets/images/category-combos.png";
import SideDishesImage from "../../../../assets/images/category-side-dishes.png";
import DrinksImage from "../../../../assets/images/category-drinks.png";
import DessertsImage from "../../../../assets/images/category-desserts.png";

const CATEGORIES = [
    { name: "Combos", image: CombosImage },
    { name: "Acompanhamentos", image: SideDishesImage },
    { name: "Bebidas", image: DrinksImage },
    { name: "Sobremesas", image: DessertsImage },
];

const categoryCards = CATEGORIES.map((category) => (
    <CategoryCard key={category.name} category={category} />
));

export const Categories = () => {
    return (
        <CategoriesStyled>
            <Title>Categorias</Title>
            <Spacer y={8} />
            <Subtitle>Navegue por categoria</Subtitle>
            <Spacer y={24} />
            <CategoriesList>{categoryCards}</CategoriesList>
        </CategoriesStyled>
    );
};
