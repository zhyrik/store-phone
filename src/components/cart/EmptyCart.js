import React from 'react'

/**
 * functional react component. When Cart empty. 
 * @function
 * @returns {JSX.Element} - react component
 */
export default function EmptyCart() {
  return (
    <div className=" container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h2>you cart is empty</h2>
        </div>
      </div>
    </div>
  )
}
