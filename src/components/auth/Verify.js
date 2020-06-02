import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { verifyMobileNumber } from "../../actions/authActions";
import classnames from "classnames";
import {
	Avatar,
	Typography,
	TextField,
	Grid,
	Button,
	Card,
	Container,
	CardContent,
} from "@material-ui/core";
import SecurityIcon from "@material-ui/icons/Security";
import Navbar from "../layout/Navbar";
import verification from "../../assets/images/verify.png";
import success from "../../assets/images/success.png";

class Verify extends Component {
	constructor() {
		super();
		this.state = {
			errors: {},
			showLogin: "none",
			showLoader: "none",
			showSuccess: false,
			code: "",
		};
	}
	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/user/home");
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/user/home"); // push user to dashboard when they login
		}
		if (nextProps.errors) {
			if (nextProps.errors.status) {
				let key = "showLoader";
				let val = "none";
				this.setState({ [key]: val });
				key = "showSuccess";
				val = true;
				this.setState({ [key]: val });
			} else {
				this.setState({
					errors: nextProps.errors,
				});
			}
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		let params = new URLSearchParams(this.props.location.search);
		const userData = {
			code: this.state.code,
			email: params.get("email"),
		};
		let key = "showLoader";
		let val = "";
		this.setState({ [key]: val });
		this.props.verifyMobileNumber(userData, this.props.history);
	};
	render() {
		const { errors } = this.state;
		return (
			<div className='container'>
				<Navbar customProps={this.state} />
				<div
					style={{
						marginTop: "3rem",
					}}
					className='row'>
					<Container maxWidth='md'>
						<Card>
							<CardContent>
								<Grid container spacing={2}>
									<Grid item lg={5} md={6} xl={6} xs={12}>
										<img
											style={{ width: "90%" }}
											src={verification}
											alt={"Verification"}
										/>
									</Grid>
									<Grid item lg={5} md={6} xl={6} xs={12}>
										<div
											style={{
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												marginBottom: "2rem",
											}}>
											<Avatar>
												<SecurityIcon />
											</Avatar>
											<Typography
												className={"custom-txt-h"}
												component='h1'
												variant='h5'>
												Verification
											</Typography>
										</div>
										<div>
											<p
												className={"custom-txt-p"}
												style={{
													textAlign: "center",
													color: "grey",
												}}>
												{this.state.showSuccess
													? "Mobile number verified successfully. Login with the registered password to start finding your soulmate."
													: "Enter the OTP that you have received to your registered mobile number"}
											</p>
										</div>
										<form
											noValidate
											onSubmit={this.onSubmit}>
											{this.state.showSuccess ? (
												""
											) : (
												<div>
													<TextField
														onChange={this.onChange}
														value={this.state.code}
														error={errors.email}
														id='outlined-basic'
														name='code'
														className={classnames(
															"",
															{
																invalid:
																	errors.email ||
																	errors.emailnotfound,
															}
														)}
														style={{
															width: "100%",
														}}
														label='OTP'
														variant='outlined'
													/>
													<span className='red-text'>
														{errors.email}
														{errors.emailnotfound}
													</span>
												</div>
											)}
											{this.state.showSuccess ? (
												<div
													style={{
														display: "flex",
														justifyContent:
															"center",
													}}>
													<Button
														variant='contained'
														style={{
															marginTop: "1rem",
															fontFamily:
																"Sailec-Bold,Helvetica,sans-serif",
															fontWeight: "bold",
															letterSpacing:
																"1px",
															color: "#fff",
															backgroundColor:
																"#22ba6a",
														}}
														href='/login'>
														Login
													</Button>
												</div>
											) : (
												<div>
													<div
														style={{
															// paddingLeft: "11.250px",
															display: "flex",
															float: "left",
														}}>
														<Button
															type='submit'
															variant='contained'
															style={{
																marginTop:
																	"1rem",
																fontFamily:
																	"Sailec-Bold,Helvetica,sans-serif",
																fontWeight:
																	"bold",
																letterSpacing:
																	"1px",
																color: "#fff",
																backgroundColor:
																	"#d56060",
															}}>
															Resend OTP
														</Button>
													</div>
													<div
														style={{
															display: "flex",
															float: "right",
														}}>
														<Button
															type='submit'
															variant='contained'
															color='primary'
															style={{
																marginTop:
																	"1rem",
																fontFamily:
																	"Sailec-Bold,Helvetica,sans-serif",
																fontWeight:
																	"bold",
																letterSpacing:
																	"1px",
																color: "#fff",
															}}>
															Submit
														</Button>
													</div>
												</div>
											)}
										</form>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Container>
				</div>
			</div>
		);
	}
}
Verify.propTypes = {
	verifyMobileNumber: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { verifyMobileNumber })(
	withRouter(Verify)
);
