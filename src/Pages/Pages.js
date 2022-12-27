import React from 'react'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Category from '../components/Category'
import Checkout from '../components/Checkout'

const Pages = (props) => {

  return (
    <Routes>
        <Route path='/' element={<Home props={props} />}/>
        <Route path='/Checkout/' element={<Checkout props={props} />}/>
        <Route path='/Category/:type' element={<Category props={props}/>}/>
        <Route path='/About/:id' element={<About props={props} />}/>
    </Routes>
  )
}

export default Pages