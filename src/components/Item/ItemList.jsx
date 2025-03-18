import React from 'react'
import Card from '../Card/Card'
import './ItemList.css'

const ItemList = ({items}) => {
    console.log('Lo que llega de items', items)
    return (
        <div className='ItemListContenedor'>
        {items.map(item => <Card key={item.id} {...item}/>)}
        </div>
    )
}

export default ItemList
