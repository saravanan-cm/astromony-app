import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Navbar from '../../components/layout/Navbar';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      showLoader: "none",
      showLogin: "none",
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.setState({ showLoader: "none" });
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({ showLoader: "none" });
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.email && this.state.password){
      this.setState({ showLoader: "" });
    }
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <Navbar customProps={this.state} />
        <div style={{ marginTop: "3rem" }} className="row">
          <Container maxWidth="xs">
            <div
              className="col s12"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "2rem"
              }}
            >
              <Avatar>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField 
                  onChange={this.onChange} 
                  value={this.state.email}
                  error={errors.email}
                  id="outlined-basic"
                  name="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                  style={{width: '100%'}}
                  label="Email" 
                  variant="outlined" />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <TextField 
                  onChange={this.onChange} 
                  value={this.state.password}
                  error={errors.password}
                  id="outlined-basic"
                  name="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                  style={{width: '100%', marginTop: '0.5rem'}}
                  label="Password" 
                  variant="outlined" />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div style={{display: 'inline-flex', width: '100%', fontSize: '12px'}}>
                <p className="grey-text text-darken-1" style={{marginLeft: '2%'}}>
                  <Link to="/forget-password">Forget Password?</Link>
                </p>
                <p className="grey-text text-darken-1" style={{marginLeft: '30%'}}>
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <div
                className="col s12"
                style={{
                  paddingLeft: "11.250px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button type="submit" variant="contained" style={{marginTop: "1rem", fontFamily: 'Sailec-Bold,Helvetica,sans-serif', fontWeight: 'bold', letterSpacing: '1px', color: '#fff', backgroundColor: '#22ba6a'}}>
                    LogIn
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
