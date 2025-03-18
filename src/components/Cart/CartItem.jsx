import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'



const Cart = ({item}) => {

    const { removeItem } = useContext(CartContext)


        return (
            <div className='ticketContainer'>
                <h2 className='ticketTitle'>Tu pedido</h2>
                    <div className='containerProducto'>
                        <div className='containerProdIq'>
                            <h3 className='productoCantidad'>{item.brand} x{item.quantity}</h3>
                            <p className='precioUnidad'>Precio x unidad: ${item.price}</p>
                            <button className='btnEliminar' onClick={()=> removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                        <div className='containerProdDr'>
                            <p className='precioTotalProd'>SubTotal: {(item.quantity * item.price).toFixed(2)}</p>
                        </div>
                    </div>
            </div>
        )
        
}

export default Cart
