import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext ({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartItemsQuantity: 0,

});

const increamentQuantity = (cartItemsQuantity) => {
    cartItemsQuantity += 1;
    return cartItemsQuantity;
}
const addToCart = (cartItems, productToAdd) => {
        
    // checkc if item exists
    const itemExists = cartItems.find((cartItem) => cartItem.id === productToAdd.id );
    
    // increment quantity if it exists
    if (itemExists) {
        
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
       { ...cartItem, quantity: cartItem.quantity + 1} :
       cartItem);
    }

    return  [ ...cartItems, {...productToAdd, quantity: 1} ];
}

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
    useEffect(()=>{
        const newQuantity = cartItems.reduce((acc, cur)=>{
            return acc + cur.quantity;
        }, 0);
        setCartItemsQuantity(newQuantity)
    },[cartItems])

    const addItemsToCart = ( productToAdd ) => {

        setCartItems(addToCart(cartItems, productToAdd));
        setCartItemsQuantity(increamentQuantity(cartItemsQuantity));

    }

    const value = {isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartItemsQuantity};


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}