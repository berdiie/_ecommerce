import React from 'react'
import Backtotop from '../components/Backtotop'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Offer from '../components/Offer'
import Product from '../components/Product'
import Products from '../components/Products'
import Subscribe from '../components/Subscribe'
import Topbar from '../components/Topbar'
import Vendor from '../components/Vendor'



export default function Firstpage() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <Product/>
    <Subscribe/>
    {/* <Products/> */}
    <Vendor/>
    <Footer/>
    <Backtotop/>
    </>
  )
}
