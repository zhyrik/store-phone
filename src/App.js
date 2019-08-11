import React from 'react'
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
  console.log(storeProducts)
  return (
    <AppContext.Provider value={{product: storeProducts, detailProduct }}>
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
