import './Card.css'
import { Link } from 'react-router-dom'
import React from 'react'

        const Card = ({id, brand, img, price}) => {
        return (
            <div className='cardContainer'>
                <img src={img} alt="" className='cardImg'/>
                <h4 className='cardTitle'>{brand}</h4>
                <p className='productPrice'>${price}</p>
                <Link to={`/item/${id}`} className='cardBtn'>Ver mas</Link>
            </div>
        )
        }

export default Card
