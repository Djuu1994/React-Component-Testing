import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Lightbox from './components/Lightbox'
import MainInfoSection from './components/MainInfoSection'

function App() {
  const[cart, updateCart] = useState(0)
  const [confirmedAmount, setConfirmedAmount] = useState(null);

  const plus = (()=> {
      updateCart( cart + 1)
  })
 
  const minus = (() =>{
    updateCart( cart - 1)
  })

  const confirmCartAmount = () => {
    setConfirmedAmount(cart);
  };
 
  const resetCart = () => {
    updateCart(null)
    setConfirmedAmount(null)
  }
  return (
    <div>
        <Navbar cart={cart} confirmedAmount={confirmedAmount} resetCart={resetCart}/>
        <div className="main-Wrapper">
          <Lightbox/>
          <MainInfoSection plus={plus} minus={minus} cart={cart} confirmCartAmount={confirmCartAmount}/>
        </div>   
    </div>
  )
}

export default App
