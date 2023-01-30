import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {FaStar} from 'react-icons/fa'

const About = ({props}) => {
  const params = useParams()
  const[product,setProduct] = useState({})

  //in about we take id of item as params and make api call based on id of item, and display it
  useEffect(()=>{ axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>setProduct(res.data))},[params.id])
console.log(product)
  return (
    //displaying individual item
    <div>
    {product.id?
    <div className="about-container">
      <div className="about-col-L">
        <div className='img-container'>
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="about-col-R">
          <h1 style={{ marginTop: '0',color:'#000'}}>{product.title}</h1>
          <span style={{display:'flex',alignItems:'center',fontSize:'20px',color:'#000',fontWeight:'600'}}><FaStar className='rev-stars'/><FaStar className='rev-stars'/><FaStar className='rev-stars'/><FaStar className='rev-stars'/>{`(${product.rating.count})`}</span>
          <h3 style={{color:'#000'}}>{product.description}</h3>
          <h3 style={{color:'#000',fontSize:'30px',color:'#fb3636'}}>${product.price}</h3>
          <div style={{color:'#000'}} className="quantity-section">
          <h2 >Quantity:</h2>
          <div>
          </div>
            <button style={{marginLeft:'20px'}}>-</button>
            <button style={{borderLeft:'none',borderRight:'none', color:'grey',cursor:'initial'}}> 0 </button>
            <button>+</button>

          </div>
          <div className="btns">
          <button className='add-to-cart' onClick={()=>props.setItems(product)}>Add to cart</button>
          <Link to={'/'}><button className='continue-shopping'>Keep shopping</button></Link>
          </div>
          
      </div>
    </div>: <div className='loading'>LOADING...</div>}
        
    </div>
  )
}

export default About