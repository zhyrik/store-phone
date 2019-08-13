import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import MainLogicFunctions from './MainLogicFunctions'
import Cart from './components/cart'
import Default from './components/Default'
import Details from './components/Details'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Model from './components/Model'

/**
 * functional react component. Main component.
 * @function
 * @returns {JSX.Element} - react component
 */
function App() {
  return (
    <MainLogicFunctions>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Model />
    </MainLogicFunctions>
  )
}

export default App
