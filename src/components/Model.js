import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ButtonContainer } from './Button'
import { AppContext } from './Context'

/**
 * functional react component. Model card after chouse product. 
 * @function
 * @returns {JSX.Element} - react component
 */
export default function Model() {
  const { modelOpen, closeModel, detailProduct } = useContext(AppContext)
  const { img, title, price } = detailProduct

  if(!modelOpen) {
    return null
  } else {
    return (<Container>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5" id="modal">
            <h5>item added to the cart</h5>
            <img src={img} className="img-fluid" alt="phone" />
            <h5>{title}</h5>
            <h5 className="text-muted">price: $ {price}</h5>
            <Link to="/">
              <ButtonContainer onClick={() => closeModel()}>
                store
              </ButtonContainer>
            </Link>
            <Link to="/cart">
              <ButtonContainer yellow onClick={() => closeModel()}>
                go to cart
              </ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </Container>)
  }

}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`
