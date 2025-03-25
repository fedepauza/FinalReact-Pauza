
import './Checkout.css'
import { useState } from 'react'

const Checkout = ({onConfirm}) => {

    const [ name , setName ] = useState('')
    const [ lastName , setLastName ] = useState ('')
    const [ email , setEmail ] = useState('')
    const [ phone , setPhone ] = useState('')

    const handleConfirm = (el) => { 
        el.preventDefault()
        console.log("onConfirm en Checkout:", onConfirm);
        
        const userData = { name, lastName, email, phone }
        onConfirm(userData)
    }


    return (
        <div>
        <form onSubmit={handleConfirm} className='checkoutForm'>
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={({target}) => setName(target.value)} placeholder='Federico' required/>
                </label>
                <label>
                    Apellido:
                    <input type="text" value={lastName} onChange={({target}) => setLastName(target.value)} placeholder='Pauza' required/>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={({target}) => setEmail(target.value)} placeholder='federico.pauza@gmail.com' required/>
                </label>
                <label>
                    Telefono:
                    <input type="text" value={phone} onChange={({target}) => setPhone(target.value)} placeholder='+5491149282334' required/>
                </label>
                <button type='submit' className='btnComprar'>Finalizar compra</button>
        </form>
        </div>
    )
}

export default Checkout
