import React from "react"
import PropTypes from "prop-types"

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
const User = props => {
  const { name, age } = props
  return (
    <p>
      {name} is {age} years old.
    </p>
  )
}

User.propTypes = {
  /**
   * User's name
   */
  name: PropTypes.string.isRequired,
  /**
   * User's age
   */
  age: PropTypes.number,
}

User.defaultProps = {
  name: "Jitendra Nirnejak",
  age: 21,
}

export default User