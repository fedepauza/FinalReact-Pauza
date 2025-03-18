import NavBarTop from "./components/NavBar/NavBarTop"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { CartProvider } from './components/Context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/Item/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
// import Checkout from "./components/Checkout/Checkout"




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
            <Route path="/Checkout" element={<Cart/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
