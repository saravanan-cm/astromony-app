import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { logoutUser } from "../../actions/authActions";
import classNames from "classnames";
import Navbar from "../../components/layout/Navbar";
// import Account from "./account/Account";

const styles = (theme) => ({
	wrapper: {
		margin: theme.spacing(1),
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
			width: "70%",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	main: {
		marginLeft: theme.spacing(9),
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
});

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active_tab: this.props.auth.user.name,
			showLoader: "none",
			showLogin: "none",
		};
	}

	// renderContent = (param) => {
	// 	switch (param) {
	// 		case "fav":
	// 			return <ShortlistedContent />;
	// 		case "dashboard":
	// 			return <Account />;
	// 		case "profiles":
	// 			return <ProfileContent />;
	// 		default:
	// 			return <Account />;
	// 	}
	// };

	render() {
		const { classes } = this.props;
		const eventhandler = (data) => {
			this.setState({ active_tab: data.active });
		};
		return (
			<div>
				<Navbar customProps={this.state} />
				<div>
                    <h1>Hello</h1>
                </div>
			</div>
		);
	}
}
User.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles, { withTheme: true })(User)
);
