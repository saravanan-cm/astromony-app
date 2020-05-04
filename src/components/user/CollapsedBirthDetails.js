import React from "react";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import { CardContent, TextField, Grid, Avatar } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";
import height from "../../assets/images/height.png";
import weight from "../../assets/images/weight.png";
import home from "../../assets/images/home.png";
import tree from "../../assets/images/tree.png";
import zodiac from "../../assets/images/zodiac.svg";
import nakshatra from "../../assets/images/nakshatra.png";

const styles = (theme) => ({
	root: {
		// maxWidth: 345,
	},
	cardTitle: {
		fontSize: "20px",
		letterSpacing: "1px",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		marginLeft: "2%",
		color: "#3a3a3a",
	},
	cardText: {
		fontSize: "16px",
		letterSpacing: "0.5px",
		maxWidth: "85%",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		marginLeft: "5%",
		color: "#3a3a3a",
	},
	cardP: {
		fontSize: "16px",
		letterSpacing: "0.5px",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		marginLeft: "5%",
		color: "#3a3a3a",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {},
});

const CollapsedBirthDetails = (props) => {
	const { classes, values } = props;
	const [expanded, setExpanded] = React.useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardActions style={{ marginLeft: "2%" }} disableSpacing>
					<Avatar
						className={classes.avatar}
						src={values.gender === "male" ? male : female}></Avatar>
					<h3 className={classes.cardTitle}>Basics</h3>
					<IconButton
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Grid container spacing={5}>
							<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
								<Typography
									paragraph
									className={classes.cardText}>
									{values.about
										.split("\n")
										.map((item, key) => (
											<span key={key}>
												{item}
												<br />
											</span>
										))}

									{values.hobby ? (
										<span>
											{" "}
											<br />
											{"Hobbies: " + values.hobby}
										</span>
									) : (
										""
									)}
								</Typography>
							</Grid>
							<Grid item lg={6} md={6} xl={6} sm={6} xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={6}>
										<div
											title='Height'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={height}></Avatar>
											<p className={classes.cardP}>
												{values.height}
											</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div
											title='Weight'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={weight}></Avatar>
											<p className={classes.cardP}>
												{values.weight}
											</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div
											title='Zodiac Sign'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={zodiac}></Avatar>
											<p className={classes.cardP}>
												{values.raasi}
											</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div
											title='Nakshatra'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={nakshatra}></Avatar>
											<p className={classes.cardP}>
												{values.nakshatra}
											</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div
											title='Family name'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={home}></Avatar>
											<p className={classes.cardP}>
												{values.familyName}
											</p>
										</div>
									</Grid>
									<Grid item xs={6}>
										<div
											title='Gothram'
											style={{
												display: "flex",
												alignItems: "center",
											}}>
											<Avatar
												className={classes.avatar}
												src={tree}></Avatar>
											<p className={classes.cardP}>
												{values.gothram}
											</p>
										</div>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

CollapsedBirthDetails.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsedBirthDetails);
