import CombosImage from "../assets/images/category-combos.png";
import SideDishesImage from "../assets/images/category-side-dishes.png";
import DrinksImage from "../assets/images/category-drinks.png";
import DessertsImage from "../assets/images/category-desserts.png";

// export const API_ADDRESS = "https://devio-back.herokuapp.com";
export const API_ADDRESS = "http://localhost:3001";

export const PATHS = {
    orders: "/",
    kitchen: "/cozinha",
    pickup: "/retirada",
    payments: "/pagamento",
    categoryCombos: "/categoria/combos",
    categoryDrinks: "/categoria/bebidas",
    categorySideDishes: "/categoria/acompanhamentos",
    categoryDesserts: "/categoria/sobremesas",
};

export const CATEGORIES = {
    combos: {
        category: "combos",
        name: "Combos",
        path: PATHS.categoryCombos,
        image: CombosImage,
    },
    drinks: {
        category: "drinks",
        name: "Bebidas",
        path: PATHS.categoryDrinks,
        image: DrinksImage,
    },
    sideDishes: {
        category: "side_dishes",
        name: "Acompanhamentos",
        path: PATHS.categorySideDishes,
        image: SideDishesImage,
    },
    desserts: {
        category: "desserts",
        name: "Sobremesas",
        path: PATHS.categoryDesserts,
        image: DessertsImage,
    },
};

export const ORDER_STATUSES = {
    preparing: "preparing",
    ready: "ready",
    pickedUp: "picked_up",
};

export const PAYMENT_TYPES = {
    credit: "credit",
    debt: "debt",
    cash: "cash",
};
