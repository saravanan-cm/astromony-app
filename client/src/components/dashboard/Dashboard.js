import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { logoutUser } from "../../actions/authActions";
import MiniDrawer from "./Navbar";
import Content from "./profiles/Content";
import classNames from "classnames";

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

class Dashboard extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};
	render() {
		const { user } = this.props.auth;
		const { classes } = this.props;
		return (
			<div>
				<div style={{ flexGrow: 1 }}>
					<MiniDrawer></MiniDrawer>
				</div>
				<main className={classNames(classes.main)}>
					<div className={classes.wrapper}>
						<Content />
					</div>
				</main>
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
