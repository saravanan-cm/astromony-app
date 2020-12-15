import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles, Grid, Card, CardContent } from "@material-ui/core";
import { logoutUser } from "../../actions/authActions";
import api from "../../actions/makeAPICall";
import classNames from "classnames";
import Navbar from "../../components/layout/Navbar";
import UserTitle from "./UserTitle";
import ImageCarousal from "../misc/ImageCarousal";
import CollapsedBirthDetails from "./CollapsedBirthDetails";
import CollapsedFamilyDetails from "./CollapsedFamilyDetails";
import CollapsedWorkDetails from "./CollapsedWorkDetails";
import CollapsedExpectations from "./CollapsedExpectations";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = (theme) => ({
	root: {},
	wrapper: {
		margin: theme.spacing(2),
		width: "auto",
		[theme.breakpoints.up("xs")]: {
			width: "95%",
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: theme.spacing(4),
			marginBottom: theme.spacing(4),
		},
		[theme.breakpoints.up("sm")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "90%",
			marginLeft: "auto",
			marginRight: "auto",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "82.5%",
			marginLeft: "auto",
			marginRight: "auto",
		},
		[theme.breakpoints.up("lg")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "80%",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	main: {
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	userHeader: {
		[theme.breakpoints.up("md")]: {
			marginTop: "3%",
			marginLeft: "2%",
			width: "90%",
			height: 400,
		},
		[theme.breakpoints.down("md")]: {
			width: "80%",
			height: 400,
		},
	},
	userDetails: {
		[theme.breakpoints.up("md")]: {
			marginTop: "3%",
			marginLeft: "2%",
			width: "90%",
			height: 50,
		},
		[theme.breakpoints.down("md")]: {
			width: "80%",
			height: 50,
		},
	},
});

class Dashboard extends Component {
	constructor(props) {
		console.log("props---------- ", props);
		super(props);
		this.state = {
			iconType: "back",
			active_tab: this.props.auth.user.name,
			showLoader: "none",
			showLogin: "none",
			liked: false,
			userDetails: {},
		};
	}

	handleChange(name, value) {
		this.setState({ ...this.state, [name]: value });
	}
	getData = async (params) => {
		let response = {};
		if (
			this.state.userDetails &&
			Object.keys(this.state.userDetails).length
		) {
			this.handleChange("userDetails", this.state.userDetails);
		} else {
			response = await api.getUsersData(params["?id"]);
			// response = await api.getMyData("saracmmce@gmail.com");
		}
		console.log(response);
		if ("status" in response) {
			let resData = response.data;
			this.handleChange("userDetails", resData);
		}
	};
	componentDidMount() {
		var qs = require("qs");
		let params = qs.parse(window.location.search);
		this.getData(params);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				{this.state.userDetails &&
				Object.keys(this.state.userDetails).length ? (
					<div style={{ backgroundColor: "#f2f3f8" }}>
						<Navbar
							customProps={this.state}
							history={this.props.history}
						/>
						<main className={classNames(classes.main)}>
							<div className={classes.wrapper}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Card>
											<CardContent>
												<Grid container spacing={4}>
													<Grid
														item
														lg={6}
														md={6}
														xl={6}
														xs={12}>
														<ImageCarousal
															imageList={
																this.state
																	.userDetails
																	.img
															}
														/>
													</Grid>
													<Grid
														item
														lg={6}
														md={6}
														xl={6}
														xs={12}>
														<UserTitle
															values={
																this.state
																	.userDetails
															}
														/>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid item xs={12}>
										<CollapsedBirthDetails
											values={this.state.userDetails}
										/>
									</Grid>
									<Grid item xs={12}>
										<CollapsedFamilyDetails
											values={this.state.userDetails}
										/>
									</Grid>
									<Grid item xs={12}>
										<CollapsedWorkDetails
											values={this.state.userDetails}
										/>
									</Grid>
									<Grid item xs={12}>
										<CollapsedExpectations
											values={this.state.userDetails}
										/>
									</Grid>
								</Grid>
							</div>
						</main>
					</div>
				) : (
					<div style={{ marginLeft: "5%" }}>
						<div style={{ display: "flex" }}>
							<Skeleton
								variant='rect'
								className={classes.userHeader}
							/>
						</div>
						<div>
							<Skeleton
								variant='rect'
								className={classes.userDetails}
							/>
						</div>
					</div>
				)}
			</div>
		);
	}
}
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles, { withTheme: true })(Dashboard)
);
