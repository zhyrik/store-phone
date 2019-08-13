import React, { useContext } from 'react'

import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CatrTotals'
import { AppContext } from '../Context'

/**
 * functional react component. Main Cart component.
 * @function
 * @param {object} history - router history obj
 * @returns {JSX.Element} - react component
 */
export default function Cart({ history }) {
  const { cart } = useContext(AppContext)
  return (
    <section>
      { cart.length > 0
        ? (<>
          <Title name="your" title="cart"/>
          <CartColums />
          <CartList />
          <CartTotals history={history}/>
        </>)
        : <EmptyCart />
      }
    </section>
  )
}
