import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from '../../components/layout/Navbar';
class Landing extends Component {
  constructor(){
    super();
    this.state = {
      showLoader: "none",
      showLogin: "",
      showMenu: "none"
    }
  }
  render() {
    return (
      <div>
        <Navbar customProps={this.state}/>
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              Find your Special Someone
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Start your life partner haunting with us.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;