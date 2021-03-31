import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav className="navbar" role="navigation" ariaLabel="main navigation">
  <div className="navbar-brand">
    <Link className="navbar-item" to="/">
      (Todo Logo)
    </Link>

    <a role="button" className="navbar-burger" ariaLabel="menu" ariaExpanded="false">
      <span ariaHidden="true"></span>
      <span ariaHidden="true"></span>
      <span ariaHidden="true"></span>
    </a>
  </div>

  <div className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item">
        Game Stats
      </Link>

      <Link className="navbar-item">
        Player Stats
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <Link className="navbar-link">
          More
        </Link>

        <div className="navbar-dropdown">
          <Link className="navbar-item">
            Schedule
          </Link>
          <Link className="navbar-item">
            News
          </Link>
          <Link to="/about-us" className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        (Todo Login)
      </div>
    </div>
  </div>
</nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header