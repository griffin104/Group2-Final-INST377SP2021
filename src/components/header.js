import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//There are many ways to define the component, there are probably pros and cons to each
//but I'm not experienced enough to know that. Just keep this in mind if looking at other
//examples online.
const Header = ({ siteTitle }) => {
  let loggedIn = true
  let updateRecords = ""

  if (loggedIn) {
    updateRecords = <Link className="navbar-item" to="/update-records">
      Update Records
    </Link>
  }

  //The following is pretty standard HTML, just with JSX syntax.
  return (
    <nav className="navbar mb-6" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="is-flex is-align-items-center" to="/">
      <StaticImage
        src="../images/logo.png"
        alt="A UMD basketball background graphic"
        height={70}
      >
      </StaticImage>
      </Link>

      <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/games">
          Games
        </Link>

        <Link className="navbar-item" to="/players">
          Players
        </Link>

        <Link className="navbar-item" to="/player-stats"> 
          Player Stats
        </Link>

        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">
            More
          </div>
          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/schedule">
              Schedule
            </Link>
            <Link className="navbar-item" to="/about-us">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {updateRecords}
        <div className="navbar-item">
          (Todo Login)
        </div>
      </div>
    </div>
  </nav>
  )
}

//This defines the siteTitle as a string 
Header.propTypes = {
  siteTitle: PropTypes.string,
}

//If no siteTitle is provided, an empty string is used
Header.defaultProps = {
  siteTitle: ``,
}

export default Header