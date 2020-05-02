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

const styles = (theme) => ({
	root: {
		// maxWidth: 345,
	},
	cardTitle: {
		fontSize: "18px",
		letterSpacing: "1px",
		fontWeight: "bold",
		fontFamily: "Roboto, sans-serif",
		marginLeft: "2%",
		color: "#222222",
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
								<Typography paragraph>
									{values.about
										.split("\n")
										.map((item, key) => (
											<span key={key}>
												{item}
												<br />
											</span>
										))}
								</Typography>
							</Grid>
							<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
								<TextField
									fullWidth
									margin='dense'
									InputProps={{
										readOnly: true,
									}}
									value={values.gender}
									variant='outlined'></TextField>
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
