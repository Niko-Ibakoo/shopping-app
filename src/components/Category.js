import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Category = ({props}) => {
  const[item,setItems]= useState([])
  const params = useParams()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${params.type}`).then(res => setItems(res.data))
  },[params])
//in here we are taking a type as params and using it to make api call and generate page that displays
// items in that specific category
  return (
    //rendering all item in that category
    <div>
    {item&&<div className="home-container">
      {item.map((item, index) =>(
        <div className="cards" key={item.id}>
          <div className="home-img">
            <img src={item.image} alt="" />
          </div>
          <div className="txt">
            <Link style={{color:"#000"}} to={'/About/'+item.id}>{item.title}</Link>
            <h2><span>${item.price}</span></h2>
          </div>
            <button onClick={()=>props.setItems(item)}>Add to cart</button>
          
        </div>
      ))}
    </div>}

  </div>
  )
}

export default Category