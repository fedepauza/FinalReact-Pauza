import { collection, documentId, getDocs, query, Timestamp, where, writeBatch, addDoc } from 'firebase/firestore'
import { CartContext } from '../Context/CartContext'
import './CheckoutFin.css'
import { useContext, useState } from 'react'
import db from '../../Config/fireBase'
import Checkout from '../Checkout/Checkout' 

const CheckoutFin = () => {

    
    const [ loading, setLoading ] = useState(false)
    const [ orderID, setOrderID ] = useState('')
    const [buyerName, setBuyerName] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)



    const createOrder = async ({ name, lastName, email, phone }) => {
        setLoading(true)

        try {
            const orden = {
                buyer: { name, lastName, email, phone },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const ids = cart.map(item => item.id)
            const productos = collection(db, 'items')
            const agregarDesdeFirebase = await getDocs(query(productos, where(documentId(), 'in', ids)))
            
            const outOfStock = [] 

            agregarDesdeFirebase.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const productosAgregados = cart.find(item => item.id === doc.id)
                const cantidadProductos = productosAgregados?.quantity || 0

                if (stockDB >= cantidadProductos) {
                    batch.update(doc.ref, { stock: stockDB - cantidadProductos })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, orden) 

                setOrderID(orderAdded.id)
                console.log('Nombre actualizado', `${name} ${lastName}`)
                setBuyerName(`${name} ${lastName}`)
                clearCart()
            } else {
                console.log('No hay stock suficiente para algunos productos.')
            }
        }
        catch (error) {
            console.error("Error al procesar la orden:", error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div><p>Cargando tu pedido...</p></div>
    }

    if (orderID) {
        return <div className='containerFinCompra'>
            <p>Gracias por tu compra <strong className='buyerName'>{buyerName}</strong>! Tu número de pedido es: <strong>{orderID}</strong></p>
        </div>
    }

    console.log("Estado actual en CheckoutFin - Loading:", loading, "OrderID:", orderID);
    
    return (
        <div>
            <Checkout onConfirm={createOrder}/>
        </div>
    )
}

export default CheckoutFin
