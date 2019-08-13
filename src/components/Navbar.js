import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components'

import { ButtonContainer } from './Button'
import logo from '../logo.svg'

/**
 * functional react component for Navbar
 * @function
 * @returns {JSX.Element} - react component
 */
export default function Navbar() {
  return (
    <Wrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to='/'>
        <img src={logo} alt='store' className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">products</Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer><span className='mr-2'><FaCartPlus /></span>my cart</ButtonContainer>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`