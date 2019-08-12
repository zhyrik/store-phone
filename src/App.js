import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { AppContext } from './components/Context'
import Cart from './components/cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Model from './components/Model'

import { storeProducts, detailProducts } from './data'

function App() {
  const [product, setProduct] = useState(storeProducts)
  const [detailProduct, setDetailsProduct] = useState(detailProducts)
  const [cart, setCart] = useState([])
  const [modelOpen, setModelOpen] = useState(false)
  const [modelProduct, setModelProduct] = useState(detailProduct)
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTax, setCartax] = useState(0)
  const [carTotal, setCartTotal] = useState(0)
  
  useEffect(() => {
    const newProduct = JSON.parse(JSON.stringify(product))
    setProduct(newProduct)
  }, [])

  // get one product from array 
  const getItem = id => {
    const productItem = product.find(item => item.id === id)
    return productItem
  }
  // put our one product on details
  const handleDetail = id => {
    const productItem = getItem(id)
    setDetailsProduct(productItem)
  }

  // add product to cart
  const addToCart = id => {
    let tempProducts = [...product] // warning bug (array not rewriting)
    const index = tempProducts.indexOf(getItem(id))
    const productItem = tempProducts[index]
    productItem.inCart = true
    productItem.count = 1
    const price = productItem.price
    productItem.total = price

    // setProduct(productItem)
    setCart([...cart, productItem])
    console.log(product, cart)
  }

   const openModel = id => {
    const product = getItem(id)
    setModelProduct(product)
    setModelOpen(true)
  }

  const closeModel = id => {
    setModelOpen(false)
  }

  const increment = id => {

  }

  const decrement = id => {
    
  }

  const removeItam = id => {

  }

  const clearCart = () => {

  }

  return (
    <AppContext.Provider value={{
      modelOpen,
      openModel,
      closeModel,
      product,
      detailProduct,
      handleDetail,
      addToCart,
      increment,
      decrement,
      removeItam,
      clearCart,
      cart,
      cartSubTotal,
      cartTax,
      carTotal
    }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    </AppContext.Provider>
    
  )
}

export default App
