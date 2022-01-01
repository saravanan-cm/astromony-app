import React from "react";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import {
	CardContent,
	CardActionArea,
	Grid,
	Divider,
	Avatar,
} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import family from "../../assets/images/family.png";
import address from "../../assets/images/address.svg";

const styles = (theme) => ({
	root: {
		// maxWidth: 345,
	},
	cardHead: {
		fontFamily: "Roboto, sans-serif",
		margin: "3% 0% 3% 7%",
		letterSpacing: "0.75px",
		fontSize: "18px",
		color: "#3a3a3a",
	},
	cardText2: {
		fontSize: "14px",
		letterSpacing: "0.5px",
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		color: "#3a3a3a",
	},
	addressRoot: {
		boxShadow: "none",
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
		fontWeight: "normal",
		fontFamily: "Roboto, sans-serif",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "5%",
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

const CollapsedFamilyDetails = (props) => {
	const { classes, values } = props;
	const [expanded, setExpanded] = React.useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardActions style={{ marginLeft: "2%" }} disableSpacing>
					<Avatar className={classes.avatar} src={family}></Avatar>
					<h3 className={classes.cardTitle}>
						Family{" "}
						{values.famStatus ? " - " + values.famStatus : ""}
					</h3>
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
								<Card className={classes.addressRoot}>
									<CardActionArea style={{ display: "flex" }}>
										<img alt='Address' style={{width: "50%"}} src={address} />
										<CardContent>
											<Typography
												paragraph
												className={classes.cardText}>
												{values.address ? (values.address
													.split(",")
													.map((item, key) => (
														<span key={key}>
															{item}
															<br />
														</span>
													))) : ("")}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item lg={6} md={6} xl={6} sm={6} xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={6}>
										<Card className={classes.root}>
											<p className={classes.cardHead}>
												Father
											</p>
											<Divider />
											{values.fatherName ? (<CardContent>
												<Typography
													className={
														classes.cardText2
													}>
													{values.fatherName}
												</Typography>
												<Typography
													color='textSecondary'
													className={
														classes.cardText2
													}>
													{values.fatherOcc}
												</Typography>
											</CardContent>) : (<CardContent><Typography
												color='textSecondary'
												className={
													classes.cardText2
												}>
												{"No details found"}
											</Typography></CardContent>)}
										</Card>
									</Grid>
									<Grid item xs={6}>
										<Card className={classes.root}>
											<p className={classes.cardHead}>
												Mother
											</p>
											<Divider />
											{values.motherName ? (<CardContent
												className={classes.cardText2}>
												<Typography
													className={
														classes.cardText2
													}>
													{values.motherName}
												</Typography>
												<Typography
													color='textSecondary'
													className={
														classes.cardText2
													}>
													{values.motherOcc}
												</Typography>
											</CardContent>) : (<CardContent><Typography
												color='textSecondary'
												className={
													classes.cardText2
												}>
												{"No details found"}
											</Typography></CardContent>)}
										</Card>
									</Grid>
									<Grid item xs={6}>
										<Card className={classes.root}>
											<p className={classes.cardHead}>
												Brother
											</p>
											<Divider />
											{values.brothers != null ? (<CardContent
												className={classes.cardText2}>
												<Typography
													className={
														classes.cardText2
													}>
													I have{" "}
													{values.brothers === 1
														? "a"
														: values.brothers}{" "}
													{values.brothers > 1
														? " brothers"
														: " brother"}
												</Typography>
												<Typography
													color='textSecondary'
													className={
														classes.cardText2
													}>
													{values.marriedBrothers ===
														1 &&
														values.brothers === 1
														? "Married"
														: values.marriedBrothers >=
															1 &&
															values.brothers > 1
															? values.marriedBrothers.toString() +
															" of them was married"
															: "Unmarried"}
												</Typography>
											</CardContent>) : (<CardContent><Typography
												color='textSecondary'
												className={
													classes.cardText2
												}>
												{"No details found"}
											</Typography></CardContent>)}
										</Card>
									</Grid>
									<Grid item xs={6}>
										<Card className={classes.root}>
											<p className={classes.cardHead}>
												Sister
											</p>
											<Divider />
											{values.sisters != null ? (<CardContent
												className={classes.cardText2}>
												<Typography
													className={
														classes.cardText2
													}>
													I have{" "}
													{values.sisters === 1
														? "a"
														: values.sisters}{" "}
													{values.sisters > 1
														? " sisters"
														: " sister"}
												</Typography>
												<Typography
													color='textSecondary'
													className={
														classes.cardText2
													}>
													{values.marriedSisters ===
														1 &&
														values.sisters === 1
														? "Married"
														: values.marriedSisters >=
															1 &&
															values.sisters > 1
															? values.marriedSisters.toString() +
															" of them was married"
															: "Unmarried"}
												</Typography>
											</CardContent>) : (<CardContent><Typography
												color='textSecondary'
												className={
													classes.cardText2
												}>
												{"No details found"}
											</Typography></CardContent>)}
										</Card>
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

CollapsedFamilyDetails.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsedFamilyDetails);
