import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Home = ({props}) => {

  const params = useParams()
  const[data,setData] = useState([])


  useEffect(()=>{axios.get('https://fakestoreapi.com/products?limit=6').then(res=>setData(res.data))},[])
  //results of API id,image, description , category, price,  title, rating{count , rate}
  return (
    //populating the home page
    <div>
      <div className="home-container">
        {data.map((item, index) =>(
          <div className="cards" key={item.id}>
            <div className="home-img">
              <img src={item.image} alt="" />
            </div>
            <div className="txt">
              <Link to={'/About/'+(item.id)}>{item.title}</Link>
              <h2><span>${item.price}</span></h2>
            </div>
            {/* take id from button and send it to checkout ALOMST DONE*/}
            {/*the function that adds items is in the Parent component, we pass it down in this component and call it 29 on click, teh argument will be the whole item itself*/}
              <button onClick={()=>props.setItems(item)} >Add to cart</button>
          </div> 
        ))}
      </div>

     

    </div>
  )
}

export default Home