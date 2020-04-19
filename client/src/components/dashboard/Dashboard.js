import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { logoutUser } from "../../actions/authActions";
import SideDrawer from "./SideDrawer";
import ProfileContent from "./profiles/Content";
import ShortlistedContent from "./shortlisted/Content";
import classNames from "classnames";
import Navbar from "../../components/layout/Navbar";

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
	constructor(props) {
		super(props);
		this.state = {
			active_tab: this.props.auth.user.name,
			showLoader: "none",
			showLogin: "none"
		};
	}

	renderContent = (param) => {
		switch(param) {
		  case 'fav':
			return <ShortlistedContent />;
		  default:
			return <ProfileContent />;
		}
	}

	render() {
		const { classes } = this.props;
		const eventhandler = (data) => {
			this.setState({active_tab: data.active});
		};
		return (
			<div>
				<Navbar customProps={this.state} />
				<div style={{ flexGrow: 1 }}>
					<SideDrawer onChange={eventhandler}></SideDrawer>
				</div>
				<main className={classNames(classes.main)}>
					<div className={classes.wrapper}>
						{this.renderContent(this.state.active_tab)}
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
