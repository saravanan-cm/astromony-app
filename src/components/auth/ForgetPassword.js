import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forgetPassword } from "../../actions/authActions";
import classnames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Card, CardContent } from "@material-ui/core";
import Navbar from "../layout/Navbar";
import thinking from "../../assets/images/thinking.gif";

class ForgetPassword extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			errors: {},
			showLogin: "",
			showLoader: "none",
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
			this.props.history.push("/dashboard"); // push user to dashboard when they login
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
		};
		this.props.forgetPassword(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};
	render() {
		const { errors } = this.state;
		return (
			<div className='container'>
				<Navbar customProps={this.state} />
				<div
					style={{
						marginTop: "3rem",
						backgroundSize: "22%",
						backgroundPosition: "90% 100%",
						backgroundImage: "url(" + thinking + ")",
						backgroundRepeat: "no-repeat",
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
										Forget Password
									</Typography>
								</div>
								<div>
									<p
										className={"custom-txt-p"}
										style={{
											textAlign: "center",
											color: "grey",
										}}>
										Enter your email to receive secure code
										to reset your password. Please make a
										note that your secure code will exipre
										in 5 mins.
									</p>
								</div>
								<form noValidate onSubmit={this.onSubmit}>
									<div className='input-field col s12'>
										<TextField
											onChange={this.onChange}
											value={this.state.email}
											error={errors.email}
											id='email outlined-basic'
											name='email'
											type='email'
											className={classnames("", {
												invalid:
													errors.email ||
													errors.emailnotfound,
											})}
											style={{ width: "100%" }}
											label='Email'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.email}
											{errors.emailnotfound}
										</span>
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
ForgetPassword.propTypes = {
	forgetPassword: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { forgetPassword })(ForgetPassword);
