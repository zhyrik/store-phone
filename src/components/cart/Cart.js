import React, { useContext } from 'react'

import Title from '../Title'
import CartColums from './CartColums'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CatrTotals'
import { AppContext } from '../Context'

export default function Cart() {
  const { cart } = useContext(AppContext)
  return (
    <section>
      { cart.length > 0
        ? (<>
          <Title name="your" title="cart"/>
          <CartColums />
          <CartList />
          <CartTotals />
        </>)
        : <EmptyCart />
      }
    </section>
  )
}
