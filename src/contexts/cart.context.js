import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [notes, setNotes] = useState("");

    const onNotesChange = (event) => setNotes(event.target.value);

    const setItem = (product, quantity = 1, additionals = []) => {
        if (!product) return;
        console.log("will set item", product, quantity);

        if (quantity === 0) {
            // Remove item from items
            const updatedItems = items.filter(
                (item) => item.product._id !== product._id
            );
            setItem(updatedItems);
            return;
        }

        // Get item referring to the product
        const item = items.filter(
            (item) => item.product._id === product._id
        )[0];

        if (item) {
            // Set quantity
            const itemCopy = structuredClone(item); // Copy to avoid modifying data in useState directly
            itemCopy.quantity = quantity;

            // Update item in items
            const updatedItems = items.map((item) => {
                if (item.product._id === product._id) return itemCopy;
                return item;
            });
            setItems(updatedItems);
        } else {
            // Add new item to items
            const newItem = { product, quantity, additionals };
            const updatedItems = structuredClone(items);
            updatedItems.push(newItem);
            setItems(updatedItems);
        }
    };

    // Recalculate total price everytime items change
    const calculateTotalPrice = () => {
        const totalPrice = items.reduce(
            (acc, el) => acc + el.product.price * el.quantity,
            0
        );
        console.log(items);
        console.log(totalPrice);
        setTotalPrice(totalPrice);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [items]);

    // Get item from specific product
    const getItem = (productId) => {
        const item = items.find((item) => item.product._id === productId);
        if (item) return structuredClone(item);
    };

    const value = {
        items,
        totalPrice,
        setItem,
        onNotesChange,
        notes,
        getItem,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
