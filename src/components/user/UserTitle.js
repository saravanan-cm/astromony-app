import React from "react";
import {
	withStyles,
	Card,
	CardContent,
	Grid,
	Typography,
	List,
	ListItem,
} from "@material-ui/core";
import PropTypes from "prop-types";
import TodayRoundedIcon from "@material-ui/icons/TodayRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

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

	return (
		<Grid container spacing={2}>
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
							<p className={classes.listText}>{values.dob}</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<PhoneIphoneRoundedIcon className={classes.icon} />
							<p className={classes.listText}>{values.phone}</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<MailOutlineRoundedIcon className={classes.icon} />
							<p className={classes.listText}>{values.email}</p>
						</ListItem>
						<ListItem className={classes.listItem}>
							<HomeRoundedIcon className={classes.icon} />
							<p className={classes.listText}>{values.ht}</p>
						</ListItem>
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
