import React, { useState } from 'react'
import Nav from './Pages/Nav'
import Pages from './Pages/Pages'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  let[cartItems,setCartItems] = useState([])

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems}/>
      {/*here create the fucntion that will add to the cart whatever is the parameter (item),
       then we pass it down as props, and use it when we need it on the buttons ADDtoCart, then we'll pass the product as an argument when we call it
       and it will be added to the cart*/}
     <Pages setItems={(item)=>setCartItems(current => [... current, item])} cartItems={cartItems} />
    </BrowserRouter>
    
  )
}

export default App