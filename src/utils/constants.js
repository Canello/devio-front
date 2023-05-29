// export const API_ADDRESS = "https://devio-back.herokuapp.com";
export const API_ADDRESS = "http://localhost:3001";

export const PATHS = {
    orders: "/",
    kitchen: "/cozinha",
    pickup: "/retirada",
    payments: "/pagamento",
};

export const CATEGORIES = {
    combos: "combos",
    sideDishes: "side_dishes",
    drinks: "drinks",
    desserts: "desserts",
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
