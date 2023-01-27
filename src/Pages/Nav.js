import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'

const Nav = ({cartItems}) => {
  //create a var that is equal to parent cart items var so we can count it's lenght every time we add new items to the array
    let items = cartItems
    const men = "men's clothing";
    const woman = "women's clothing"

  return (
    //nav bar
    <div>
        <nav>
        <ul>
          <Link to={`/Category/${men}`} className='li'>Men</Link>
          <Link to={`/Category/${woman}`} className='li'>Women</Link>
          <Link to={'/Category/jewelery'} className='li'> Jewels</Link>
          <Link to={'/Category/electronics'} className='li'>Electronics</Link>
        </ul>
            <h1><Link style={{color:`rgb(35, 35, 35)`,fontFamily:` 'Solitreo', cursive` ,textDecoration:"none",fontSize:"3rem"}} to={"/"}> Shopping App</Link></h1>
                <Link to={'/Checkout/'} className="cart-container">
                <BsCart4 style={{color:`rgb(35, 35, 35)`}} className="cart"/>
                {items.length>0? <div className="cart-items"> <span>{items.length}</span></div> : null}
            </Link>
      </nav>
    </div>
  )
}

export default Nav