import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext ({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    removeItemFromCart: () => {},
    cartItemsQuantity: 0,
    totalItemsPrice : 0,

});


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
const removeFromCart = (cartItems, productToRemove, deleteItem) => {
    // If one element remaining remove the item form the cartItems    
    if (productToRemove.quantity === 1 || deleteItem){    
        return cartItems.filter((cartItem) => (cartItem.id !== productToRemove.id) )
    }
    // decrement quantity
        
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? 
       { ...cartItem, quantity: cartItem.quantity - 1} :
       cartItem);   
   
}


export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);
 
    useEffect(()=>{
        const newQuantity = cartItems.reduce((acc, cur)=>{
            return acc + cur.quantity;
        }, 0);
        setCartItemsQuantity(newQuantity)
    },[cartItems])

    useEffect(()=>{
        const newTotal = cartItems.reduce((acc, cur)=>{
            return acc + (cur.price * cur.quantity);
        }, 0);
        setTotalItemsPrice(newTotal)
    },[cartItems])



    const addItemsToCart = ( productToAdd ) => {

        setCartItems(addToCart(cartItems, productToAdd));

    }
    const removeItemFromCart = ( productToRemove, deleteItem ) => {

        setCartItems(removeFromCart(cartItems, productToRemove, deleteItem));

    }
 

    const value = {isCartOpen, 
                    setIsCartOpen, 
                    addItemsToCart, 
                    cartItems, 
                    removeItemFromCart, 
                    cartItemsQuantity,
                    totalItemsPrice,
                    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
    
}