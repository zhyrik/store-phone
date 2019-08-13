import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaTrash } from 'react-icons/fa'

import { AppContext } from '../Context'

/**
 * functional react component. Cart item (product).
 * @function
 * @param {object} item - product data 
 * @returns {JSX.Element} - react component
 */
function CartItem({ item }) {
  const { increment, decrement, removeItam  } = useContext(AppContext)
  const { id, title, img, price, total, count} = item

  return (
    <div className="row my-3 text-capitalize text-center">

      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: '5rem', height: '5rem'}} className="img-fluid" alt="phone" />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span>{title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
      <span className="d-lg-none">price :</span>{price}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}> - </span>
            <span className="btn btn-black mx-1"> {count} </span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}> + </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItam(id)}>
          <FaTrash />
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>

    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    count: PropTypes.number
  }).isRequired
}

export default CartItem