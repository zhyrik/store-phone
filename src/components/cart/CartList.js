import React, { useContext } from 'react'

import CartItem from './CartItem.js'
import { AppContext } from '../Context'

/**
 * functional react component. List product in Cart. 
 * @function
 * @returns {JSX.Element} - react component
 */
export default function CartList() {
  const { cart } = useContext(AppContext)

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item}/>
      })}
    </div>
  )
}
