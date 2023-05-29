import { useState } from "react";

export const useSearchProducts = (products) => {
    const [search, setSearch] = useState("");
    const [searchedProducts, setSearchedProducts] = useState(products);

    const onSearchChange = (event) => {
        const newSearch = event.target.value;
        setSearch(newSearch);

        const searchRegex = new RegExp(newSearch.toLocaleLowerCase());
        const filteredProducts = products.filter((product) =>
            searchRegex.test(product.name.toLocaleLowerCase())
        );
        setSearchedProducts(filteredProducts);
    };

    return {
        search,
        onSearchChange,
        searchedProducts,
    };
};
