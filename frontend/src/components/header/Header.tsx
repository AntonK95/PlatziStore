

import React,{ useState, useEffect, useRef } from 'react'
import './header.css'
import Cart from '../cart/Cart'

function Header(): JSX.Element {

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>();

  // Toggla state mellan true och false för öppen eller stängd cart
  const toggleCart = (): void => {
    setIsCartOpen(!isCartOpen);
  }

  // Detta är tydligen fel sätt att göra på.. (Det funkar)
// // Välj header-elementet
// const header = document.querySelector("header") as HTMLElement;

// if (header) {
//   // Typbevakning för att säkerställa att 'header' inte är null
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 0) {
//       header.classList.add("scrolled");
//       console.log('Scroll event detected')
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });

// Detta är rätt sätt att göra på via TypeScript.
useEffect(() => {
  const handleScroll = (): void => {
    if (headerRef.current) {
      if (window.scrollY > 0) {
        headerRef.current.classList.add('scrolled');
        console.log('Scroll event triggered. Animate header')
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <header ref={headerRef}>
        <div>
            <p className='platzi'>Platzi</p>
                <p>Store</p>
        </div>
        <nav>
          {/* <button className='btn'>Favorite</button> */}
          <button className='btn' onClick={toggleCart}>Cart</button>
        </nav>
        <Cart isOpen={isCartOpen} onClose={toggleCart} />    
      </header>
  )
}

export default Header;