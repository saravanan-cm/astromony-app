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
import work from "../../assets/images/work.png";
import work_content from "../../assets/images/work_content.png";
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

const CollapsedWorkDetails = (props) => {
	const { classes, values } = props;
	const [expanded, setExpanded] = React.useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card className={classes.root}>
				<CardActions style={{ marginLeft: "2%" }} disableSpacing>
					<Avatar className={classes.avatar} src={work}></Avatar>
					<h3 className={classes.cardTitle}>Work</h3>
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
								<Card className={classes.workRoot}>
									<CardActionArea style={{ display: "flex" }}>
										<img alt='Work' style={{width: "50%"}} src={work_content} />
									</CardActionArea>
								</Card>
							</Grid>
							<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
								<div className={classes.workValues}>
									<Typography
										className={classes.work}
										component='p'
										align='center'>
										{values.wrk}
									</Typography>
									<Typography
										className={classes.work}
										component='p'
										align='center'>
										{values.salary}
									</Typography>
									<Typography
										className={classes.work}
										component='p'
										align='center'>
										{values.company}
									</Typography>
									<Typography
										className={classes.work}
										component='p'
										align='center'>
										{values.wrkLoc}
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

CollapsedWorkDetails.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollapsedWorkDetails);
