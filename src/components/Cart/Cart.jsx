

import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)
    console.log('que hay en carrito',cart)
    if (!cart || cart.length === 0){
        return( 
            <div className='containerVacio'>
                <h1>Upps! El carrito esta vacio</h1>
                <Link className='checkoutInicio' to='/'>Elegir productos</Link>
            </div>
        )
    }

    return(
        <div className='cartCnt'>
            <h2 className='ticketTitle'>Tu pedido</h2>
            {cart.map(p => <CartItem key={p.id} item={p}/>)}
            <div className='checkout'>
                <h3>Total: ${total}</h3>
                <div className='btnContainer'>
                    <button onClick={()=> clearCart()} className='buttonVaciar'>Vaciar Carrito</button>
                    <Link to='/checkout' className='checkoutBTN'>Continuar</Link>
                </div>
            </div>
        </div>
    )
}


export default Cart