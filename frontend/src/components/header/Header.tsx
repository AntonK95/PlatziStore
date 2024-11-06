

import React,{ useState } from 'react'
import './header.css'
import Cart from '../cart/Cart'

function Header() {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Toggla state mellan true och false för öppen eller stängd cart
  const toggleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  }

// Välj header-elementet
const header = document.querySelector("header");

if (header) {
  // Typbevakning för att säkerställa att 'header' inte är null
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
      console.log('Scroll event detected')
    } else {
      header.classList.remove("scrolled");
    }
  });
}

  return (
    <header>
        <div>
            <p className='platzi'>Platzi</p>
                <p>Store</p>

        </div>
        <nav>
          <button className='btn'>Favorite</button>
          <button className='btn' onClick={toggleCart}>Cart</button>
        </nav>
        <Cart isOpen={isCartOpen} onClose={toggleCart} />    </header>
  )
}

export default Header;