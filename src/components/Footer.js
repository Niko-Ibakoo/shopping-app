import React from 'react'
import {FaYoutube,FaInstagram,FaTwitter,FaFacebook,FaHeart} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <h1>Follow us on our social media</h1>
        <p style={{width:'50%'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, suscipit, quaerat, possimus nobis alias omnis totam atque quis nihil veniam reiciendis aspernatur dolorum sequi ut excepturi officiis deserunt fugiat iure!</p>
        <div className="social">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaYoutube/>
        </div>
        <div style={{backgroundColor:'black',width:'100%',height:'70px',display:'flex',alignItems:'center',justifyContent:'center'}}><p>copyright&#169; made with <FaHeart style={{color:'red'}}/>  by devniko</p></div>
    </div>

    </>
   
  )
}

export default Footer