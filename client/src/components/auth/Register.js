import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container, Card, CardContent } from "@material-ui/core";
import Navbar from "../../components/layout/Navbar";
import youngCouples from "../../assets/young-couples.gif";
import oldCouples from "../../assets/old-couples.gif";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {},
			showLoader: "none",
			showLogin: "none",
			showMenu: "none",
		};
	}
	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}
	componentWillReceiveProps(nextProps) {
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
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};
		if (
			this.state.email &&
			this.state.name &&
			this.state.password &&
			this.state.password2
		) {
			this.setState({ showLoader: "" });
		}
		this.props.registerUser(newUser, this.props.history);
	};
	render() {
		const { errors } = this.state;
		console.log("window innerwidth---   ", window.innerWidth);
		return (
			<div className='container'>
				<Navbar customProps={this.state} />
				<div
					style={{
						marginTop: "1rem",
						backgroundSize: "25%, 25%",
						backgroundPosition: "5% 20%, right bottom",
						backgroundImage:
							"url(" +
							youngCouples +
							"), url(" +
							oldCouples +
							")",
						backgroundRepeat: "no-repeat, no-repeat",
					}}
					className='row'>
					<Container maxWidth='xs'>
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
									<Typography component='h1' variant='h5'>
										Register
									</Typography>
								</div>
								<form noValidate onSubmit={this.onSubmit}>
									<div>
										<TextField
											onChange={this.onChange}
											value={this.state.name}
											error={errors.name}
											id='outlined-basic'
											name='name'
											type='text'
											className={classnames("", {
												invalid: errors.name,
											})}
											style={{ width: "100%" }}
											label='Name'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.name}
										</span>
									</div>
									<div>
										<TextField
											onChange={this.onChange}
											value={this.state.email}
											error={errors.email}
											id='outlined-basic'
											name='email'
											type='email'
											className={classnames("", {
												invalid: errors.email,
											})}
											style={{
												width: "100%",
												marginTop: "0.5rem",
											}}
											label='Email'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.email}
										</span>
									</div>
									<div>
										<TextField
											onChange={this.onChange}
											value={this.state.password}
											error={errors.password}
											id='outlined-basic'
											name='password'
											type='password'
											className={classnames("", {
												invalid:
													errors.password ||
													errors.passwordincorrect,
											})}
											style={{
												width: "100%",
												marginTop: "0.5rem",
											}}
											label='New Password'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.password}
										</span>
									</div>
									<div>
										<TextField
											onChange={this.onChange}
											value={this.state.password2}
											error={errors.password2}
											id='outlined-basic'
											name='password2'
											type='password'
											className={classnames("", {
												invalid:
													errors.password ||
													errors.passwordincorrect,
											})}
											style={{
												width: "100%",
												marginTop: "0.5rem",
											}}
											label='Confirm Password'
											variant='outlined'
										/>
										<span className='red-text'>
											{errors.password2}
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
											style={{ float: "left" }}>
											Read terms and conditions
										</p>
										<p
											className='grey-text text-darken-1'
											style={{ float: "right" }}>
											Already have an account?{" "}
											<Link to='/login'>Login</Link>
										</p>
									</div>
									<div
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
											Sign Up
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
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
