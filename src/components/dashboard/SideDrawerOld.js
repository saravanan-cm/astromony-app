import React, { Component } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
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

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "#fff",
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: "6px 2px 3px #aaaaaa",
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
		marginRight: theme.spacing(2),
	},
	hide: {
		display: "none",
	},
	navbarLinks: {
		color: "#212121",
		textDecoration: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
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
	},
});

class SideDrawer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			active: "dashboard",
			showSideDrawer: ""
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

	handleDrawerOpen() {
		this.setState({ ...this.state, showSideDrawer: "" });
		this.setState({ ...this.state, open: true });
	}

	handleDrawerClose() {
		this.setState({ ...this.state, showSideDrawer: "none" });
		this.setState({ ...this.state, open: false });
	}

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
		return (
			<React.Fragment>
				<CssBaseline />
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: this.state.open,
					})}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={() => this.handleDrawerOpen()}
							edge='start'
							className={clsx(classes.menuButton, {
								[classes.hide]: this.state.open,
							})}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							AstroMony
						</Typography>
						<Button
							variant='contained'
							className={classes.loginBtn}
							onClick={this.onLogoutClick}
							style={{ display: "" }}>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					style={{display:this.state.showSideDrawer}}
					variant='permanent'
					className={clsx(classes.drawer, {
						[classes.drawerOpen]: this.state.open,
						[classes.drawerClose]: !this.state.open,
					})}
					classes={{
						paper: clsx({
							[classes.drawerOpen]: this.state.open,
							[classes.drawerClose]: !this.state.open,
						}),
					}}>
					<div className={classes.toolbar}>
						<IconButton onClick={() => this.handleDrawerClose()}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List alignItems='center'>
						{this.drawerList.map((obj, index) => (
							<Link
								className={classes.navbarLinks}
								onClick={
									obj.name !== "logout"
										? () => this.handleTabChange(obj.name)
										: this.onLogoutClick
								}>
								<ListItem
									selected={obj.name === this.state.active}
									button
									key={obj.name}>
									<ListItemIcon
										className={classes[obj.class]}>
										{obj.icon}
									</ListItemIcon>
									<ListItemText primary={obj.tag} />
								</ListItem>
								<Divider
									style={{
										marginLeft: "10%",
										marginRight: "10%",
									}}
								/>
							</Link>
						))}
					</List>
				</Drawer>
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
	withStyles(useStyles, { withTheme: true })(SideDrawer)
);
