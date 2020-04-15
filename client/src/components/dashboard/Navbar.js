import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
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
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	navbarLinks: {
		color: "#183247",
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
}));

function MiniDrawer(auth, errors) {
	const onLogoutClick = (e) => {
		e.preventDefault();
		const loggedout = logoutUser();
		try {
			loggedout();
		} catch (err) {
			console.log(err);
		}
		window.location.href = "./login";
	};
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const drawerList = [
		{
			name: auth.auth.user.name,
			link: "#",
			icon: <AccountCircleRoundedIcon />,
		},
		{
			name: "Brides",
			link: "#",
			icon: <PhotoLibraryRoundedIcon />,
		},
		{
			name: "Shortlisted",
			link: "#",
			icon: <StarsRoundedIcon />,
		},
		{
			name: "Logout",
			link: "logout",
			icon: <ExitToAppRoundedIcon />,
		},
	];
	const preventDefault = (event) => event.preventDefault();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						AstroMony
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant='permanent'
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{drawerList.map((obj, index) => (
						<ListItem selected={index === 0} button key={obj.name}>
							<ListItemIcon>
								<Link
									className={classes.navbarLinks}
									to={obj.link !== "logout" ? obj.link : ""}
									onClick={
										obj.link !== "logout"
											? preventDefault
											: onLogoutClick
									}>
									{obj.icon}
								</Link>
							</ListItemIcon>
							<ListItemText primary={obj.name} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</React.Fragment>
	);
}

MiniDrawer.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps)(MiniDrawer);
