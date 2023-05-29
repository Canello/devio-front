import { createContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi.hook";
import { getAllProducts } from "../services/products.service";
import { CATEGORIES } from "../utils/constants";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [combos, setCombos] = useState([]);
    const [sideDishes, setSideDishes] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [desserts, setDesserts] = useState([]);

    const [fetchProducts, products, isLoadingProducts] = useApi(
        getAllProducts,
        {
            initialData: [],
            initialIsLoading: true,
        }
    );

    const filterByCategory = (category, setter) => {
        const filteredProducts = products.map(
            (product) => product.category === category
        );
        setter(filteredProducts);
    };

    useEffect(() => {
        filterByCategory(CATEGORIES.combos, setCombos);
        filterByCategory(CATEGORIES.sideDishes, setSideDishes);
        filterByCategory(CATEGORIES.drinks, setDrinks);
        filterByCategory(CATEGORIES.desserts, setDesserts);
    }, [products]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const value = {
        products,
        isLoadingProducts,
        combos,
        sideDishes,
        drinks,
        desserts,
    };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
