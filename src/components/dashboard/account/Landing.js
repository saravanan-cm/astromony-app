import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { logoutUser } from "../../../actions/authActions";
import classNames from "classnames";
import SideDrawer from "../SideDrawer";
import Account from "./Account";
import ProfileContent from "../profiles/Content";
import ShortlistedContent from "../shortlisted/Content";
import { SnackbarProvider } from "notistack";

const styles = (theme) => ({
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
			width: "75%",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	main: {
		marginLeft: "auto",
		marginRight: "auto",
		// margin: theme.spacing(2),
		marginTop: theme.spacing(10),
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
});

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active_tab: this.props.auth.user.name,
			showLoader: "none",
			showLogin: "no",
			data: null,
			profiles: [],
			favorites: [],
		};
	}

	handleChange = (name, value) => {
		this.setState({ [name]: value });
	};

	renderContent = () => {
		let path = this.props.match.params.tab;
		switch (path) {
			case "profiles":
				return (
					<ProfileContent
						profiles={this.state.profiles}
						onChange={this.handleChange}
						userDetails={this.props.auth.user}
					/>
				);
				break;
			case "favorites":
				return (
					<ShortlistedContent
						favorites={this.state.favorites}
						onChange={this.handleChange}
						userDetails={this.props.auth.user}
					/>
				);
				break;
			case "home":
				return (
					<SnackbarProvider>
						<Account
							myData={this.state.data}
							onChange={this.handleChange}
							userDetails={this.props.auth.user}
						/>
					</SnackbarProvider>
				);
				break;
			default:
				break;
		}
	};

	render() {
		const { classes, history } = this.props;
		const eventhandler = (data) => {
			this.setState({ active_tab: data.active });
		};
		return (
			<div style={{backgroundImage: "linear-gradient(white, #f3f3f3)", height: "100%", paddingBottom: "15%"}}>
				<div style={{ flexGrow: 1 }}>
					<SideDrawer onChange={eventhandler} history={history} />
				</div>
				<main className={classNames(classes.main)}>
					<div className={classes.wrapper}>
						{this.renderContent()}
					</div>
				</main>
			</div>
		);
	}
}
Landing.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles, { withTheme: true })(Landing)
);
