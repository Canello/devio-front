import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import { OrdersProvider } from "./contexts/orders.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProductsProvider>
            <OrdersProvider>
                <CartProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </CartProvider>
            </OrdersProvider>
        </ProductsProvider>
    </React.StrictMode>
);
