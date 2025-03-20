
import { createContext, useState } from "react";

export const CartContext = createContext( { cart: [] })

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState ([])

    console.log(cart)

    const addItem = (item, quantity) => {
        
        if (!isInCart(item.id)) {
            setCart(prev => {
                const updatedCart = [...prev, { ...item, quantity }]
                return updatedCart
            })
        } else {
            setCart(prev => {
                const updatedCart = prev.map(e =>
                    e.id === item.id ? { ...e, quantity: e.quantity + quantity } : e)
                return updatedCart;
            })
        }
    }
    
    

    const removeItem = (itemID) => {
        const cartUpdate = cart.filter(e => e.id !== itemID)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart ([])
    }

    const isInCart = (itemID) => {
        return cart.some ( e => e.id === itemID )
    }

    const total = cart.reduce( (acc, e) => acc + e.price * e.quantity, 0)
    

    const totalQuantity = cart.reduce( (acc, e) => acc + e.quantity, 0)


    return (
        <CartContext.Provider value={ {cart, addItem, removeItem, clearCart, total, totalQuantity} }>
            { children }
        </CartContext.Provider>
    )
}