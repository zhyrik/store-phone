import React from 'react'

/**
 * functional react component CartColumns. For display > 992px 
 * @function
 * @returns {JSX.Element} - react component
 */
export default function CartCoums() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">products</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">name of product</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">price</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">quantitiy</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        
      </div>
    </div>
  )
}
