import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import styles from './styles.css'

const PlayerBio = ({ image, number, position, name, weight, height }) => {
    return (
        <div className="columns is-vcentered">
        <div className="column is-one-fifth">
          <p className="title is-4" style={{backgroundColor: "red", color: "white"}}>#{number} Position: {position}</p>
          <p className="title is-2">{name}</p>
          <p className="subtitle is-4">{weight} lbs {height}</p>
        </div>
        <div className="column is-three-fifths">
            <img src={image} alt="Selected Player Image"/>
        </div>
        <div className="column is-one-fifth">
            <StaticImage
            src="../images/umd-m-logo.png"
            alt="UMD logo"
            />
        </div>
      </div>
    )
}

export default PlayerBio