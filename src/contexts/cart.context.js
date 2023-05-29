import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addProduct = (product) => {
        // Get item referring to the product
        const item = items.filter(
            (item) => item.product._id === product._id
        )[0];

        if (item) {
            // Increase quantity by 1
            const itemCopy = structuredClone(item); // Copy to avoid modifying data in useState directly
            itemCopy.quantity = itemCopy.quantity + 1;

            // Update item in items
            const updatedItems = items.map((item) => {
                if (item.product._id === product._id) return itemCopy;
                return item;
            });
            setItems(updatedItems);
        } else {
            // Create new item with quantity of 1
            const newItem = { product, quantity: 1 };

            // Add new item to items
            const updatedItems = structuredClone(items);
            updatedItems.push(newItem);
            setItems(updatedItems);
        }
    };

    const removeProduct = (product) => {
        // Get item referring to the product
        const item = items.filter(
            (item) => item.product._id === product._id
        )[0];

        if (!item) return;

        // Decrease quantity by 1
        const itemCopy = structuredClone(item); // Copy to avoid modifying data in useState directly
        itemCopy.quantity = itemCopy.quantity - 1;

        let updatedItems;
        if (itemCopy.quantity < 1) {
            // Delete item from items
            updatedItems = items.filter(
                (item) => !(item.product._id === product._id)
            );
        } else {
            // Update item in items
            updatedItems = items.map((item) => {
                if (item.product._id === product._id) return itemCopy;
                return item;
            });
        }

        setItems(updatedItems);
    };

    const calculateTotalPrice = () => {
        const totalPrice = items.reduce(
            (acc, el) => acc + el.product.price * el.quantity,
            0
        );
        setTotalPrice(totalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [items]);

    const value = { items, totalPrice, addProduct, removeProduct };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
