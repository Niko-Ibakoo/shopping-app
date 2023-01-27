import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const About = ({props}) => {
  const params = useParams()
  const[product,setProduct] = useState({})

  //in about we take id of item as params and make api call based on id of item, and display it
  useEffect(()=>{ axios.get(`https://fakestoreapi.com/products/${params.id}`).then(res=>setProduct(res.data))},[params.id])

console.log(product)
  return (
    //displaying individual item
    <div>
    {product.id?<div className="about-container">
        <div className="about-img">
          <img src={product.image} alt="" />
        </div>
        <div className="about-txt">
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <h3>{product.rating.count} reviews</h3>
          <button onClick={()=>props.setItems(product)}>add to cart</button>
          <button>continue shopping</button>
        </div>
      </div>: <div className='loading'>LOADING...</div>}
        
    </div>
  )
}

export default About