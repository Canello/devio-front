import { useEffect, useState } from "react";
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
import HamburguerImage from "../../assets/images/category-combos.png";
import { CATEGORIES } from "../../utils/constants";

const PRODUCTS = [
    {
        name: "Hamburguer",
        description: "200g de carne",
        price: "30,50",
        image: HamburguerImage,
        category: CATEGORIES.combos,
    },
    {
        name: "Hamburguerrrrrrrrrrrrrrrrrrrrrrrrrrr",
        description: "200g de carne",
        price: "30,50",
        image: HamburguerImage,
        category: CATEGORIES.combos,
    },
    {
        name: "Hamburguer",
        description: "200g de carne",
        price: "30,50",
        image: HamburguerImage,
        category: CATEGORIES.combos,
    },
    {
        name: "Hamburguer",
        description: "200g de carne",
        price: "30,50",
        image: HamburguerImage,
        category: CATEGORIES.combos,
    },
];

export const Orders = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(PRODUCTS);

    const onSearchChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);

        let newProducts;
        if (!newSearch) {
            newProducts = PRODUCTS;
        } else {
            const searchRegex = new RegExp(newSearch.toLocaleLowerCase());
            newProducts = PRODUCTS.filter((product) =>
                searchRegex.test(product.name.toLocaleLowerCase())
            );
        }
        setProducts(newProducts);
    };

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
            <Products products={products} />
            <Spacer y={64} />
            <ButtonsContainer>
                <OrderButton variant="secondary">Cancelar</OrderButton>
                <OrderButton variant="primary">Finalizar Pedido</OrderButton>
            </ButtonsContainer>
        </OrdersStyled>
    );
};
