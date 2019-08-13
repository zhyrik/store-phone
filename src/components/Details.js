import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from './Context'
import { ButtonContainer } from './Button'

/**
 * functional react component for detail product. Run after click on photo product.
 * @function
 * @returns {JSX.Element} - react component
 */
export default function Details() {
  const { detailProduct, openModel, addToCart } = useContext(AppContext)
  const { id, company, img, info, price, title, inCart } = detailProduct
  return (
    <div className="container py-4">

      {/**title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>

      {/**info */}
      <div className="row">
        <div className="col-10 mx-auto col-mb-6 my-3 text-capitalize col-lg-5">
          <img src={img} alt="phone" className="img-fluid"/>
        </div>
        <div className="col-10 mx-auto col-mb-6 my-3 text-capitalize col-lg-5">
          <h2>model : {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: {price}<span>$</span>
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about product
          </p>
          <p className="text-muted lead">{info}</p>

          {/** buttons */}
          <div>
            <Link to="/">
              <ButtonContainer>
                back to home
              </ButtonContainer>
            </Link>
            <ButtonContainer yellow disable={inCart} onClick={() => { addToCart(id); openModel()}}>
              {inCart? "inCart": "add to cart"}
            </ButtonContainer>
          </div>

        </div>
      </div>
    </div>
  )
}
