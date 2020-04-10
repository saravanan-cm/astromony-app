import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Avatar from '@material-ui/core/Avatar';
// import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            {/* <Avatar style={{marginLeft: '15px' }} className="black-text left">
              <Link to="/">
                <HomeRoundedIcon />
              </Link>
            </Avatar> */}
            <Link to="/">
              <i style={{marginLeft: '15px' }} className="material-icons black-text left">home</i>
            </Link>
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              AstroMony
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;