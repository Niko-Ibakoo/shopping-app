import React from "react"
import axios from "axios"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import headphones from '../shopping_assets/headphones.png'
const Home = () => {

  const[data,setData] = useState([])
  const[data2,setData2] = useState([])
  const woman = "women's clothing"

  useEffect(()=>{axios.get('https://fakestoreapi.com/products/category/electronics').then(res=>setData(res.data))},[])
  useEffect(()=>{axios.get(`https://fakestoreapi.com/products/category/${woman}`).then(res=>setData2(res.data))},[])
  //results of API id,image, description , category, price,  title, rating{count , rate}

  return (
    //populating the home page
    <>
      <div className="home-container">
        <div className="banner"> {/*top-box */}
        <div className="headphones-cont">
          <img src={headphones} alt="" />
        </div>
          <h2 style={{color:'black',margin:'0'}}>Beats solo</h2>
          <h1 style={{color:'black',margin:'0',fontSize:'60px'}}>Wireless</h1>
          <h1 style={{fontSize:'100px',margin:'0',textShadow: `2px 2px 4px #000000`}}>HEADPHONES</h1>
          <button style={{marginTop:'30px'}}>Shop wireless headphones</button>
        </div>
       <div style={{textAlign:'center',margin:'30px 0px'}}>
        <h1 style={{fontSize:'50px',margin:'0',color:'black'}}>Best Seller Products</h1>
          <p style={{fontSize:'larger',color:'black'}}>our best seller collections and more</p>
       </div>
       {/*content grid*/}
        <div className="home-content">

        {data&& data.map(item=>(
          <Link to= {'/About/'+ item.id} key={item.id} className="card">
            <div className="card-img">
              <img src={item.image} alt="img" />
            </div>
            <h2 style={{marginTop:'5px',fontWeight:'900'}}>$ {item.price}</h2>
            <p style={{margin:'0',fontWeight:'500',color:'grey' }} >{item.title}</p>
          </Link>
        ))}
        </div>
            {/*woman section */}
            <div style={{textAlign:'center',width:'100%',background: 'linear-gradient(#61c3f1, #8088df)',borderRadius:'15px'}}>
              <h1 style={{fontSize:'70px',textShadow: `2px 2px 4px #000000`}}>WOMEN'S COLLECTION </h1>
            </div>
            <div className="home-content">
            {data2&& data2.map((item,index)=>(
          <Link to= {'/About/'+ item.id} key={item.id} className="card">
            <div className="card-img">
              <img src={item.image} alt="img" />
            </div>
            <h2 style={{marginTop:'5px',fontWeight:'900'}}>$ {item.price}</h2>
            <p style={{margin:'0',fontWeight:'500',color:'grey' }} >{item.title}</p>
          </Link>
        ))}
            </div>
      </div>
      <Footer/>


     

    </>
  )
}

export default Home