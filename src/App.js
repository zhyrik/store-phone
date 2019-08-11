import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { AppContext } from './components/Context'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

import { storeProducts, detailProduct } from './data'

function App() {
  const [product, setProduct] = useState(storeProducts)
  const [detailProduct, setDetailsProduct] = useState({})
  const [cart, setCart] = useState([])
  const [modelOpen, setModelOpen] = useState(true)
  const [modelProduct, setModelProduct] = useState(detailProduct)
  
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

   const openModel => {

  }

  return (
    <AppContext.Provider value={{product, detailProduct, handleDetail, addToCart }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </AppContext.Provider>
    
  )
}

export default App
