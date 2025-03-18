
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react'
import './NavBar.css'
import { CartContext } from '../Context/CartContext'

const NavBar = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <div className='navBarContainer'>
            <NavLink to='/' className='NavLink'><h2 className='Title'>mate.</h2></NavLink>
            
                <ul className='ulLinks'>
                

                <NavLink to="/category/yerba" className='links'>Yerbas</NavLink>
                <NavLink to="/category/mate" className='links'>Mates</NavLink>
                <NavLink to="/category/bombillas" className='links'>Bombillas</NavLink>


                </ul>

            <Link to="/cart" className="cartWidget" style={{display: totalQuantity > 0 ? 'block' : 'hidden'}}>
            <img src="https://dsityreshop.com/public/frontend/images/cart.png" alt="cart" className='cartImg'/>
            {totalQuantity}
        </Link>
        </div>
    )
}

export default NavBar
