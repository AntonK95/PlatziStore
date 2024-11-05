

import React,{ useState } from 'react'
import './header.css'
import Cart from '../cart/Cart'

function Header() {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Toggla state mellan true och false för öppen eller stängd cart
  const toggleCart = (): void => {
    setIsCartOpen(!isCartOpen);
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