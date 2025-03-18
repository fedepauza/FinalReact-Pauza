import React from 'react'
import './ItemDetailContainer.css'

const ItemContainer = ({id, brand, img, price, description}) => {
    return (
            <div className='itemContainer'>

                    <img src={img} alt="" className='itemImg'/>
                    <h4 className='itemTitle'>{brand}</h4>
                    <p className='itemPrice'>${price}</p>
                    <p className='itemDescription'>{description}</p>
                    
            </div>
    )
}

export default ItemContainer
