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
  const [product, setProduct] = useState([])
  const [detailProduct, setDetailsProduct] = useState(detailProducts)
  const [cart, setCart] = useState([])
  const [modelOpen, setModelOpen] = useState(false)
  const [modelProduct, setModelProduct] = useState(detailProduct)
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTax, setCartax] = useState(0)
  const [carTotal, setCartTotal] = useState(0)
  
  // did mount
  useEffect(() => {
    newProduct()
  }, [])
  // wen cart change we count cart total, tax
  useEffect(() => { addTotals() }, [cart])

  const newProduct = () => {
    const newProduct = JSON.parse(JSON.stringify(storeProducts))
    setProduct(newProduct)
  }

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
    
  }

  // open & close model cart button in Product
  const openModel = id => {
    const product = getItem(id)
    setModelProduct(product)
    setModelOpen(true)
  }
  const closeModel = id => {
    setModelOpen(false)
  }

  // increment button in Cart
  const increment = id => {
    incrementDecrement(id, 1)
  }

  // decrement button in Cart
  const decrement = id => {
    incrementDecrement(id, -1)
  }

  // to increment & decrement function
  const incrementDecrement = (id, num) => {
    let tempCart = [...cart]
    const selectedProduct = tempCart.find(item => item.id === id)
  
    const index = tempCart.indexOf(selectedProduct)
    const product = tempCart[index]

    product.count = product.count + num

    if (product.count <= 0) {
      removeItam(id)
    } else {
      product.total = product.count * product.price
      setCart([...tempCart])
    }
  }

  // remove one imam from Cart (trashcan button & decrement)
  const removeItam = id => {
    let tempProducts = [...product]
    let tempCart = [...cart]

    tempCart = tempCart.filter(item => item.id !== id)

    const index = tempProducts.indexOf(getItem(id))
    let removedProduct = tempProducts[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0

    setCart([...tempCart])
    setProduct([...tempProducts])
  }

  // clear button in Cart
  const clearCart = () => {
    setCart([])
    newProduct()
    addTotals()
  }

  // count total, tax , subtotal cost
  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total))
    const tempTax = subTotal *0.1
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax

    setCartSubTotal(subTotal)
    setCartax(tax)
    setCartTotal(total)
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
