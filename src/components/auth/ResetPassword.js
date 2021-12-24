import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { resetPassword } from "../../actions/authActions";
import classnames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Card, CardContent } from "@material-ui/core";
import Navbar from "../layout/Navbar";
import thinking from "../../assets/images/thinking.gif";

class ResetPassword extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			otp: "",
			newpassword: "",
			confirmpassword: "",
			errors: {},
			showLogin: "",
			showLoader: "none",
			showMenu: "none",
		};
	}
	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/user/home");
		}
		var qs = require("qs");
		let params = qs.parse(window.location.search);
		this.setState({
			email: params["?email"],
		});
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/user/home"); // push user to dashboard when they login
		}
		if (nextProps.errors) {
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
		const userData = {
			email: this.state.email,
			otp: this.state.otp,
			newpassword: this.state.newpassword,
			confirmpassword: this.state.confirmpassword,
		};
		this.props.resetPassword(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};
	render() {
		const { errors } = this.state;
		return (
			<div className='container' 
				style={{
					height: "100vh",
					maxWidth:"inherit",
					// backgroundPosition: "100% 0%",
					backgroundImage: "linear-gradient(#f3f3f3, rgb(255, 251, 255), rgb(229 213 213))",
					backgroundRepeat: "no-repeat",
				}}>
				<Navbar customProps={this.state} />
				<div
					style={{
						marginTop: "10rem",
						// backgroundSize: "22%",
						// backgroundPosition: "90% 100%",
						// backgroundImage: "url(" + thinking + ")",
						// backgroundRepeat: "no-repeat",
					}}
					className='row'>
					<Container maxWidth='sm'>
						<Card>
							<CardContent>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										marginBottom: "2rem",
									}}>
									<Avatar>
										<LockOutlinedIcon />
									</Avatar>
									<Typography
										className={"custom-txt-h"}
										component='h1'
										variant='h5'>
										Reset Password
									</Typography>
								</div>
								<div>
									<p
										className={"custom-txt-p"}
										style={{
											textAlign: "center",
											color: "grey",
										}}>
										Enter your secret code, received in your email account and set a new password.
									</p>
								</div>
								<br></br>
								<form noValidate onSubmit={this.onSubmit}>
									<div className='input-field col s12'>
										<TextField
											required
											onChange={this.onChange}
											value={this.state.otp}
											error={errors.otp}
											id='otp outlined-basic'
											name='otp'
											type='number'
											className={classnames("", {
												invalid:
													errors.otp ||
													errors.otpnotfound,
											})}
											style={{ width: "100%" }}
											label='OTP'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.otp}
											{errors.otpnotfound}
										</span>
									</div>
									<br></br>
									<div className='input-field col s12'>
										<TextField
											required
											onChange={this.onChange}
											value={this.state.newpassword}
											error={errors.newpassword}
											id='newpassword outlined-basic'
											name='newpassword'
											type='password'
											className={classnames("", {
												invalid:
													errors.newpassword ||
													errors.passwordincorrect,
											})}
											style={{ width: "100%" }}
											label='New password'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.newpassword}
											{errors.passwordincorrect}
										</span>
									</div>
									<br></br>
									<div className='input-field col s12'>
										<TextField
											required
											onChange={this.onChange}
											value={this.state.confirmpassword}
											error={errors.confirmpassword}
											id='confirmpassword outlined-basic'
											name='confirmpassword'
											type='password'
											className={classnames("", {
												invalid:
													errors.confirmpassword ||
													errors.confirmpasswordincorrect,
											})}
											style={{ width: "100%" }}
											label='Confirm new password'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.confirmpassword}
											{errors.confirmpasswordnotfound}
										</span>
									</div>
									<div
										style={{
											display: "inline-block",
											width: "100%",
											fontSize: "12px",
										}}>
										<p
											className='grey-text text-darken-1'
											style={{ float: "left", margin: "2% 31% 2% 0%", fontSize: "1.15em" }}>
											Don't have an account?{" "}
											<Link style={{ color: "blue", textDecoration: "underline" }} to='/register'>Register</Link>
										</p>
										<p
											className='grey-text text-darken-1'
											style={{ float: "left", margin: "2% 0% 2% 0%", fontSize: "1.15em" }}>
											Already have an account?{" "}
											<Link style={{ color: "blue", textDecoration: "underline" }} to='/login'>Login</Link>
										</p>
									</div>
									<div
										className='col s12'
										style={{
											paddingLeft: "11.250px",
											display: "flex",
											justifyContent: "center",
										}}>
										<Button
											type='submit'
											variant='contained'
											style={{
												marginTop: "1rem",
												fontFamily:
													"Sailec-Bold,Helvetica,sans-serif",
												fontWeight: "bold",
												letterSpacing: "1px",
												color: "#fff",
												backgroundColor: "#22ba6a",
											}}>
											Send
										</Button>
									</div>
								</form>
							</CardContent>
						</Card>
					</Container>
				</div>
			</div>
		);
	}
}
ResetPassword.propTypes = {
	resetPassword: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { resetPassword })(ResetPassword);
