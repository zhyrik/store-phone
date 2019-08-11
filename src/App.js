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
  useEffect(() => {
    const newProduct = JSON.parse(JSON.stringify(product))
    setProduct(newProduct)
  }, [])
  return (
    <AppContext.Provider value={{product, detailProduct }}>
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
