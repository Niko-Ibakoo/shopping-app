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
    {item[0]?<div style={{margin:'7% 20%'}} className='home-content'>
      {item.map((item, index) =>(
        <Link to={'/About/'+item.id} className="card" key={item.id}>
          <div className="card-img">
            <img src={item.image} alt="" />
          </div>
          <div>
          <h2 style={{margin:'0'}}>${item.price}</h2>
            <p style={{color:"#000",textDecoration:'none',width:'100%',marginbottom:'30px'}} >{item.title}</p>
          </div>
          
        </Link>
      ))}
    </div>: <div className='loading'>LOADING...</div>}

  </div>
  )
}

export default Category