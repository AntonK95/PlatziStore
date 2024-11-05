import React from 'react'
import AllProducts from '../../components/products/AllProducts'
import './landingpage.css'


function LandignPage() {
  return (
    <div className='landing__page--wrapper'>
      <section className='product__container'>
        <AllProducts />

      </section>
    </div>
  )
}

export default LandignPage