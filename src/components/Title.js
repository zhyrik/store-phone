import React from 'react'
import PropTypes from 'prop-types'

/**
 * functional react component for titles
 * @function
 * @param {string} name - black text
 * @param {string} title - blue text
 * @returns {JSX.Element} - react component
 */
function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Title