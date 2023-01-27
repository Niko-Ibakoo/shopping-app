import React, { useState } from 'react'
import { useEffect } from 'react'
const Checkout = ({props}) => {
  const products = props.cartItems
  const[total,setTotal] = useState(0)

  //get the id from button add-to-cart adn use that as params to make api call, - No need
  // render a checkout page based on that , which will contain 2 columns
  // left will have payment methods
  //right will have a stack of items that user has added to cart with respective price
  // underneath right column display a sum of all items prices
  // add button to confirm order, and alert(order placed)
  const Sum = (item)=>{
    for(let i = 0; i<item.length;i++){
      setTotal(prev=> prev+ (item[i].price/2)) //to fix
    }
  }
  useEffect(()=>{
    Sum(products) 
  },[])
  return (
    <div>
      <div className="checkout-container">
        <div className="column-left">
            <form action="Submit">
            
              <input id='name' type="text" placeholder='name' />
              <input id='last-name' type="text" placeholder='last name' />
              <input id='email' type="text" placeholder='email' />
              <input id='country' type="text" placeholder='country' />
              <input id='city' type="text" placeholder='city' />
              <input id='zip' type="number" placeholder='zipcode' />
            </form>
        </div>
        <div className="column-right">
        <h2 style={{marginLeft:"5px"}}>Order Summary</h2>
            {products.map(item=>(
              <div key={item.id}>
                <div className="cart-items-container">
                  <div className="cart-images">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-txt">
                    <h3>{item.title}</h3>
                    <h3>${item.price}</h3>
                  </div>
                  <div className="remove"> x </div>
                  <div className="quantity-cont">
                    <div className="qbtn sub">-</div>
                    <div className="quantity">1</div>
                    <div className="qbtn add">+</div>
                  </div>
                </div>
              </div>
            ))}
            <div style={{textAlign:"center"}} className="total">
              <h3 >Total ${total}</h3>
            </div>
            <div className='cart-btn' >
              <div className="confirm-btn"><span>Confirm</span></div>
              <div className="cancel-btn"><span>Cancel</span></div>
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Checkout