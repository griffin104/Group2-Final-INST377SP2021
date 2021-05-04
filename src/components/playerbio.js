import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { StaticImage } from "gatsby-plugin-image"

const PlayerBio = ({ image, number, position, name, weight, height }) => {
    return (
        <div>
            {/*<img src={image} alt="dfiusalgfidsg"/>*/}
            {number}
            {position}
            {name}
            {weight}
            {height}
        </div>
    )
}

export default PlayerBio