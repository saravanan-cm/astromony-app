import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
// import { Link } from "react-router-dom";
import LogoSection from "./LogoSection";
import { withStyles } from "@material-ui/core/styles";
import { logoutUser } from "../../actions/authActions";
import LinearProgress from "@material-ui/core/LinearProgress";

const ColorLinearProgress = withStyles({
	colorPrimary: {
		backgroundColor: "#b2dfdb",
	},
	barColorPrimary: {
		backgroundColor: "#00695c",
	},
})(LinearProgress);

const useStyles = (theme) => ({
	boxTheme: {
		[theme.breakpoints.down('md')]: {
			width: '45%'
		},
		[theme.breakpoints.up('md')]: {
			width: '10%'
		}
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	root: {
		boxShadow: "6px 2px 3px #aaaaaa",
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
		fontFamily: "Sailec-Bold,Helvetica,sans-serif",
		fontWeight: "bold",
		letterSpacing: "1px",
		color: "#fff",
		backgroundColor: "#22ba6a",
		'&:hover': {
			backgroundColor: "#22a35f",
			color: '#FFF'
		}
	},
	logoutBtn: {
		fontFamily: "Sailec-Bold,Helvetica,sans-serif",
		fontWeight: "bold",
		letterSpacing: "1px",
		color: "#fff",
		backgroundColor: "#c9293c",
		'&:hover': {
			backgroundColor: "#cf3821",
			color: '#FFF'
		}
	},
	loginButton: {
		// marginLeft: "0%",
	},
	features: {
		marginRight: "5%",
	},
});

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			openLogoutAlert: false
		};
	}
	handleClose = (e) => {
		this.setState({
			openLogoutAlert: false,
		});
	};
	handleLogoutAlert = (e) => {
		this.setState({
			openLogoutAlert: true,
		});
	};
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
		window.location.href = "./login";
	};
	render() {
		const { classes, customProps, history } = this.props;
		const iconType = !customProps.hasOwnProperty("iconType")
			? "menu"
			: customProps.iconType;
		console.log(this.props.auth.isAuthenticated);
		console.log("loader--  ", customProps.showLoader);
		return (
			<div className={classes.root}>
				<ColorLinearProgress
					style={{ display: customProps.showLoader }}
				/>
				<AppBar position='static' className={classes.barStyle}>
					<Toolbar>
						{iconType === "menu" ? (
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								style={{ display: customProps.showMenu }}
								aria-label='menu'>
								<MenuIcon />
							</IconButton>
						) : (
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								style={{ display: customProps.showMenu }}
								onClick={() => {
									history.goBack();
								}}
								aria-label='menu'>
								<ArrowBackRoundedIcon />
							</IconButton>
						)}
						<div>
							<Box
								sx={{
									width: 228,
									display: 'flex'
								}}
								className={classes.boxTheme}
							>
								<Box component="span" sx={{ display: { xs: 'block', md: 'block' }, flexGrow: 1 }}>
									<LogoSection loggedIn={this.props.auth.user && this.props.auth.user.name ? this.props.auth.user.name : null} />
								</Box>
							</Box>
						</div>
						<div
							className={classes.features}
							style={{
								display: customProps.showFeatures ? "" : "none",
							}}>
							<Button href='#' color='primary'>
								Link
							</Button>
						</div>
						<div className={classes.loginButton}>
							{customProps.showLogin === "no" ? (
								<Button
									variant='contained'
									className={classes.logoutBtn}
									onClick={this.handleLogoutAlert}
									style={{ display: "" }}>
									Logout
								</Button>
							) : customProps.showLogin === "yes" ? (
								<Button
									variant='contained'
									className={classes.loginBtn}
									href='/login'
									style={{ display: customProps.showLogin }}>
									Login
								</Button>
							) : ("")}
						</div>
					</Toolbar>
				</AppBar>
				<div>
					<Dialog
						open={this.state.openLogoutAlert}
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							{"Confirmation"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Are you sure, you want to logout from Vyvaha?
							</DialogContentText>
						</DialogContent>
						<DialogActions style={{marginBottom:"2%"}}>
							<Button variant="outlined" color='primary' onClick={this.handleClose} autoFocus>Cancel</Button>
							<Button variant="outlined" color='secondary' onClick={this.onLogoutClick}>
								Proceed
							</Button>
						</DialogActions>
					</Dialog>
				</div>
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
