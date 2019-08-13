import React from 'react'

export default function Default(props) {
  console.log('default',props)
  return (
    <div className="constainer">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercese pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>teh requested URL--<span className="text-danger">
            {props.location.pathname}
          </span>-- wos not found </h3>
        </div>
      </div>
    </div>
  )
}
