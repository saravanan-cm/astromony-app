import React from "react";
import { withStyles } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import PropTypes from "prop-types";
import {
	CardContent,
	TextField,
	CardActionArea,
	Grid,
	Avatar,
	Collapse,
	IconButton,
	Typography,
	CardActions,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import search from "../../assets/images/search.png";
import thinking from "../../assets/images/think.png";
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
	work: {
		fontSize: "18px",
		letterSpacing: "1px",
		fontWeight: "normal",
		lineHeight: "1.5 !important",
		fontFamily: "Roboto, sans-serif",
		color: "#222222",
		marginBottom: "4%",
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
	workRoot: {
		boxShadow: "none",
	},
	workValues: {
		[theme.breakpoints.up("md")]: {
			float: "left",
			marginTop: "15%",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
});

const CollapsedExpectations = (props) => {
	const { classes, values } = props;
	const [expanded, setExpanded] = React.useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardActions style={{ marginLeft: "2%" }} disableSpacing>
					<Avatar className={classes.avatar} src={search}></Avatar>
					<h3 className={classes.cardTitle}>
						Expectations for a {values.lookingfor}
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
							<Grid
								item
								xl={6}
								lg={6}
								md={6}
								sm={12}
								xs={12}
								style={{ textAlign: "center" }}>
								<img
									style={{ width: "55%" }}
									alt='Dreaming'
									src={thinking}
								/>
							</Grid>
							<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
								<div className={classes.workValues}>
									<Typography
										className={classes.work}
										paragraph>
										{values.expectations}
									</Typography>
								</div>
							</Grid>
						</Grid>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

CollapsedExpectations.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsedExpectations);
