import './ItemListContainer.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Config/fireBase'
import {  collection, query, where, getDocs } from 'firebase/firestore'
import ItemList from '../Item/ItemList'

const ItemListContainer = () => {

        const { category } = useParams()
        const [items, setItems] = useState([])

        useEffect(() => {
            console.log('categoria recibida', category)
        const collectionRef = category
            ? query(collection(db, 'items'), where('category', '==', category)) 
            : collection(db, 'items');

        getDocs (collectionRef)
            .then(response => {
                const productAdapted = response.docs.map(doc => ({
                    id: doc.id, 
                    ...doc.data()
                }))
                setItems(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
    }, [category])

        return (
            <div>
                <div className='containerItemList'>
                    <img src="https://i.pinimg.com/originals/81/44/a5/8144a5c11bad0c352309245e8300d529.png" alt="" className='imgMate'/>
                </div>
                <div className='cardsContainer'>
                    <ItemList items={items}/>
                </div>
            </div>
        )
    }
    
export default ItemListContainer
