import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import PaypalButton from './PaypalButton'
import { AppContext } from '../Context'

export default function CatrTotals({ history }) {
  const { cartSubTotal, cartTax, carTotal, clearCart } = useContext(AppContext)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                clear cart
              </button>
            </Link>

            <h5>
              <span className="text-title">
                subtotal : 
              </span>
              <strong> $ {cartSubTotal}</strong>
            </h5>

            <h5>
              <span className="text-title">
                tax : 
              </span>
              <strong> $ {cartTax}</strong>
            </h5>

            <h5>
              <span className="text-title">
                total : 
              </span>
              <strong> $ {carTotal}</strong>
            </h5>
            <PaypalButton
              total={carTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </>
  )
}
