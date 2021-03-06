import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import PropTypes from 'prop-types'

import { AppContext } from './Context'

/**
 * functional react component for Product card
 * @function
 * @param {object} product - all product info
 * @returns {JSX.Element} - react component
 */
function Product({ product }) {
  const { id, title, img, price, inCart } = product
  const { handleDetail, addToCart, openModel } = useContext(AppContext)
  return (

    <Wrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt="product" className="card-img-top"/>
          </Link>
          <button className="card-btn" disabled={inCart?true:false} onClick={()=> { addToCart(id); openModel(id); }}>
            {inCart? (<p className="text-capitalize mb-0" disabled>
              in Cart
            </p>): <FaCartPlus />}
          </button>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-o">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </Wrapper>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
}

const Wrapper = styled.div`
.card{
  border-color: transparent;
  transition: all 1s linear;
}
.card-footer{
  background: transparent;
  border-top: transparent;
  transition: all 0.5s linear;
}
&:hover{
  .card{
    border: 0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0, 0,0.2);
  }
  .card-footer{
    background: rgba(247, 247,247);
  }
}
.img-container{
  position: relative;
  overflow: hidden;
}
.img-container:hover .card-img-top{
  transform: scale(1.2);
  transition: all 0.5s linear;
}
.card-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  background: var(--lightBlue);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius: 0.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 0.5s linear;
  outline: none;
}
.img-container:hover .card-btn{
  transform: translate(0, 0);
}
.card-btn:hover{
  color: var(--mainBlue);
  cursor: pointer;
}`

export default Product
