import NavBarTop from "./components/NavBar/NavBarTop"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { CartProvider } from './components/Context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/Item/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import CheckoutFin from "./components/CheckoutFin/CheckoutFin"




function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBarTop/>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            {/* <Route path="/checkout" element={<Checkout/>}/> */}
            <Route path="/checkout" element={<CheckoutFin/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
