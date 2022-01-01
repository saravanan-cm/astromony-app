import React, { useState } from "react";
import {
	withStyles,
	Grid,
	Typography,
	List,
	ListItem,
	Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import TodayRoundedIcon from "@material-ui/icons/TodayRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import api from "../../actions/makeAPICall";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import { useSnackbar } from "notistack";

const styles = (theme) => ({
	username: {
		fontSize: "42px",
		fontFamily: "Roboto, sans-serif",
		textTransform: "uppercase",
		marginBottom: "1%",
		color: "#222222",
	},
	work: {
		fontSize: "16px",
		letterSpacing: "2.1px",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		textTransform: "uppercase",
		marginBottom: "1%",
		color: "#222222",
	},
	listText: {
		margin: "0% 0% 0% 2%",
		fontSize: "14px",
		color: "#777777",
	},
	idText: {
		fontSize: "14px",
		letterSpacing: "2.1px",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		margin: "0% 0% 0% 2%",
		color: "#222222",
	},
	listItem: {
		padding: "2% 0% 2% 0%",
	},
	icon: {
		color: "#558B2F",
	},
});

const UserTitle = (props) => {
	const { values, classes } = props;
	const { enqueueSnackbar } = useSnackbar();
	var [fav, setFav] = useState(values.fav);

	function removeFavorite() {
		removeFav();
	}

	function addFavorite() {
		addFav()
	}

	function addFav() {
		let fav_id = values.uid;
		let user = values.user_email;
		console.log("entered favAction--   ", fav_id, user);
		let req_data = {
			fav: [fav_id],
		};
		api.addFavProfile(req_data, user).then((resp) => {
			if (resp && resp["data"] && resp["data"]["status"]) {
				let variant = "success";
				enqueueSnackbar('Profile shortlisted', { variant });
				setFav(true);
			}
		});
	};

	function removeFav() {
		let fav_id = values.uid;
		let user = values.user_email;
		console.log("entered favAction--   ", fav_id, user);
		let req_data = {
			fav: [fav_id],
		};
		api.removeFavProfile(req_data, user).then((resp) => {
			if (resp && resp["data"] && resp["data"]["status"]) {
				enqueueSnackbar('Removed from shortlists');
				setFav(false);
			}
		});
	};

	return (
		<Grid container spacing={2} style={{ margin: "10% 0% 0% 0%" }}>
			<Grid item xs={12}>
				<Typography style={{ marginLeft: "4%" }}>
					<h3 className={classes.username}>{values.name}</h3>
					<h4 className={classes.work}>{values.wrk}</h4>
					{/* <p className={classes.work}>{values.ht}</p> */}
					<List>
						<ListItem className={classes.listItem}>
							<FingerprintIcon className={classes.icon} />
							<p className={classes.idText}>
								{"ID - " + values.uid}
							</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<TodayRoundedIcon className={classes.icon} />
							<p className={classes.listText}>
								{values.dob + " - Age: " + values.age}
							</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<PhoneIphoneRoundedIcon className={classes.icon} />
							<p className={classes.listText}>{values.phone}</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<MailOutlineRoundedIcon className={classes.icon} />
							<p className={classes.listText}>{values.email}</p>
						</ListItem>
						{values.ht ? (
							<ListItem className={classes.listItem}>
								<HomeRoundedIcon className={classes.icon} />
								<p className={classes.listText}>{values.ht}</p>
							</ListItem>
						) : (
							""
						)}
						{values.email == values.user_email ? ("") : (fav ? (
							<ListItem className={classes.listItem}>
								<Grid container>
									<Grid item xs={12} md={6} lg={6} xl={6} sm={12}>
										<Button variant="outlined" fullWidth startIcon={<StarIcon />} color='primary' onClick={removeFavorite}> Shortlisted</Button>
									</Grid>
								</Grid>
							</ListItem>
						) : (
							<ListItem className={classes.listItem}>
								<Grid container>
									<Grid item xs={12} md={6} lg={6} xl={6} sm={12}>
										<Button variant="outlined" fullWidth startIcon={<StarBorderIcon />} color='primary' onClick={addFavorite}> Shortlist</Button>
									</Grid>
								</Grid>
							</ListItem>
						))}
						{values.facebook || values.instagram || values.twitter ? (<ListItem className={classes.listItem}>
							<Grid container>
								<Grid item xs={12} md={6} lg={6} xl={6} sm={12}>
									{values.facebook ? (<button
										className="text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none"
										type="button"
										style={{ marginRight: "2rem" }}
									>
										<a href={values.facebook} rel="noreferrer" target="_blank">
											<img src={facebook} alt="Facebook"></img>
										</a>
									</button>) : ("")}
									{values.instagram ? (<button
										className="text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none"
										type="button"
										style={{ marginRight: "2rem" }}
									>
										<a href={values.instagram} rel="noreferrer" target="_blank">
											<img src={instagram} alt="Instagram"></img>
										</a>
									</button>) : ("")}
									{values.twitter ? (<button
										className="text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center outline-none focus:outline-none"
										type="button"
										style={{ marginRight: "2rem" }}
									>
										<a href={values.twitter} rel="noreferrer" target="_blank">
											<img src={twitter} alt="Twitter"></img>
										</a>
									</button>) : ("")}
								</Grid>
							</Grid>
						</ListItem>) : ("")}
					</List>
				</Typography>
			</Grid>
		</Grid>
	);
};

UserTitle.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserTitle);
