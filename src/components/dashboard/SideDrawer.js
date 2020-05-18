import React, { Component } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { withStyles, Hidden, Badge, Menu, MenuItem } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const drawerWidth = 220;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		backgroundColor: "#fff",
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: "6px 2px 3px #aaaaaa",
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 24,
	},
	menuButtonHidden: {
		display: "none",
	},
	title: {
		flexGrow: 1,
	},
	drawerPaper: {
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		[theme.breakpoints.up("md")]: {
			// position: "relative",
		},
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing.unit * 6,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing.unit * 9,
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		height: "100vh",
		overflow: "auto",
	},
	chartContainer: {
		marginLeft: -22,
	},
	tableContainer: {
		height: 320,
	},
	logoutBtn: {
		color: "#212121",
	},
	favBtn: {
		color: "#ce3167",
	},
	profileBtn: {
		color: "#28378e",
	},
	contentBtn: {
		color: "#59965c",
	},
	loginBtn: {
		fontFamily: "Sailec-Bold,Helvetica,sans-serif",
		fontWeight: "bold",
		letterSpacing: "1px",
		color: "#fff",
		backgroundColor: "#22ba6a",
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	navbarLinks: {
		color: "#212121",
		textDecoration: "none",
	},
});

class SideDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			auth: true,
			anchorEl: null,
			active: "dashboard",
			showSideDrawer: "",
		};
		this.drawerList = [
			{
				name: "dashboard",
				tag: this.props.auth.user.name,
				link: "#",
				class: "profileBtn",
				icon: <AccountCircleRoundedIcon />,
			},
			{
				name: "profiles",
				tag: "Brides",
				link: "#",
				class: "contentBtn",
				icon: <PeopleRoundedIcon />,
			},
			{
				name: "fav",
				tag: "Shortlisted",
				link: "#",
				class: "favBtn",
				icon: <StarsRoundedIcon />,
			},
			{
				name: "logout",
				tag: "Logout",
				link: "logout",
				class: "logoutBtn",
				icon: <ExitToAppRoundedIcon />,
			},
		];
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	handleChange = (event) => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	handleTabChange(name) {
		this.setState({ ...this.state, active: name }, () => {
			if (this.props.onChange) {
				this.props.onChange(this.state);
			}
		});
	}
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
		window.location.href = "./login";
	};

	render() {
		const { classes } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const siteTitle = "Vyvaha";

		return (
			<React.Fragment>
				<AppBar
					position='fixed'
					className={clsx(
						classes.appBar,
						this.state.open && classes.appBarShift
					)}
					style={{ background: "#051745", boxShadow: "none" }}>
					<Toolbar
						disableGutters={!this.state.open}
						className={classes.toolbar}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={this.handleDrawerOpen}
							className={clsx(
								classes.menuButton,
								this.state.open && classes.menuButtonHidden
							)}>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='title'
							color='inherit'
							noWrap
							className={classes.title}>
							{siteTitle}
						</Typography>
						<Button
							variant='contained'
							className={classes.loginBtn}
							onClick={this.onLogoutClick}
							style={{ display: "" }}>
							Logout
						</Button>
						<div>
							<IconButton
								aria-owns={open ? "menu-appbar" : null}
								aria-haspopup='true'
								onClick={this.handleMenu}
								color='inherit'>
								{/* <AccountCircle /> */}
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={open}
								onClose={this.handleClose}>
								<MenuItem onClick={this.handleClose}>
									Profile
								</MenuItem>
								<MenuItem onClick={this.handleClose}>
									My account
								</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>

				<Hidden mdUp>
					<Drawer
						variant='temporary'
						onClose={this.handleDrawerClose}
						classes={{
							paper: clsx(
								classes.drawerPaper,
								!this.state.open && classes.drawerPaperClose
							),
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						open={this.state.open}>
						<div className={classes.toolbarIcon}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<List style={{ marginTop: "12px" }} alignItems='center'>
							{this.drawerList.map((obj, index) => (
								<Link
									className={classes.navbarLinks}
									onClick={
										obj.name !== "logout"
											? () =>
													this.handleTabChange(
														obj.name
													)
											: this.onLogoutClick
									}>
									<ListItem
										selected={
											obj.name === this.state.active
										}
										button
										key={obj.name}>
										<ListItemIcon
											className={classes[obj.class]}>
											{obj.icon}
										</ListItemIcon>
										<ListItemText primary={obj.tag} />
									</ListItem>
								</Link>
							))}
						</List>
					</Drawer>
				</Hidden>
				<Hidden smDown implementation='css'>
					<Drawer
						variant='permanent'
						classes={{
							paper: clsx(
								classes.drawerPaper,
								!this.state.open && classes.drawerPaperClose
							),
						}}
						open={this.state.open}>
						<div className={classes.toolbarIcon}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<List style={{ marginTop: "12px" }} alignItems='center'>
							{this.drawerList.map((obj, index) => (
								<Link
									className={classes.navbarLinks}
									onClick={
										obj.name !== "logout"
											? () =>
													this.handleTabChange(
														obj.name
													)
											: this.onLogoutClick
									}>
									<ListItem
										selected={
											obj.name === this.state.active
										}
										button
										key={obj.name}>
										<ListItemIcon
											className={classes[obj.class]}>
											{obj.icon}
										</ListItemIcon>
										<ListItemText primary={obj.tag} />
									</ListItem>
								</Link>
							))}
						</List>
					</Drawer>
				</Hidden>
			</React.Fragment>
		);
	}
}

SideDrawer.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	active: state.name,
});

export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles, { withTheme: true })(SideDrawer)
);
