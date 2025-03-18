import { useState } from 'react'
import '../Item/ItemDetailContainer.css'
import React from 'react'

const ItemCount = ( { initial, onAdd}) => {

    const [ count, setCount ] = useState(initial)
    
    const handleAdd = () => {
        if (count > 0) {
            setCount(count + 1)
        }
    }

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className='handlesQuantity'>
            <button onClick={handleSubstract} className="lessItem">-</button>
            <span className="quantityItem">{count}</span>
            <button onClick={handleAdd} className="plusItem">+</button>
            </div>
            <button onClick={() => onAdd(count)} className="anadirItem">Agregar al carrito 🛒</button>
        </div>
    )   
}

export default ItemCount
