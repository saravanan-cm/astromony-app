import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { logoutUser } from "../../actions/authActions";

const useStyles = (theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	titleText: {
		textDecoration: "none",
		color: "#161515",
	},
	loginText: {
		fontFamily: "Sailec-Bold,Helvetica,sans-serif",
		fontWeight: "bold",
		letterSpacing: "1px",
		textDecoration: "none",
		color: "#fff",
	},
	barStyle: {
		backgroundColor: "#fff",
		boxShadow: "none",
		color: "#161515",
	},
	loginBtn: {
		backgroundColor: "#22ba6a",
	},
});

class Navbar extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
		window.location.href = "./login";
	};
	render() {
		const { classes } = this.props;
		const preventDefault = (event) => event.preventDefault();
		console.log(this.props.auth.isAuthenticated);
		return (
			<div className={classes.root}>
				<AppBar position='static' className={classes.barStyle}>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' className={classes.title}>
							<Link className={classes.titleText} to='/'>
								AstroMony
							</Link>
						</Typography>
						<Button
							variant='contained'
							className={classes.loginBtn}>
							<Link
								onClick={
									this.props.auth.isAuthenticated
										? this.onLogoutClick
										: preventDefault
								}
								className={classes.loginText}
								to={
									this.props.auth.isAuthenticated
										? "#"
										: "/login"
								}>
								{this.props.auth.isAuthenticated
									? "Logout"
									: "Login"}
							</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navbar.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { logoutUser })(
	withStyles(useStyles)(Navbar)
);