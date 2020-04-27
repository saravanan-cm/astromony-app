import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import AccountDetails from "./AccountDetails";
import AccountProfile from "./AccountProfile";
import Password from "./Password";
import Preferences from "./Preferences";

const styles = (theme) => ({
	root: {
		// padding: theme.spacing(2),
	},
});

const Account = (props) => {
	const { classes } = props;
	const [value, setValue] = React.useState(0);
	const [activeTab, setActiveTab] = React.useState("basics");
	const navBarList = [
		{
			id: 9,
			label: "Basics",
			name: "basics",
		},
		{
			id: 8,
			label: "About",
			name: "about",
		},
		{
			id: 7,
			label: "Plan",
			name: "plan",
		},
		{
			id: 6,
			label: "Security",
			name: "security",
		},
	];

	const handleChange = (event, newValue) => {
		setValue(newValue);
		setActiveTab(navBarList[newValue]["name"]);
	};

	return (
		<div className={classes.root}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor='primary'
				textColor='primary'
				style={{ marginBottom: "1%", float: "left" }}
				centered>
				{navBarList.map((obj, index) => (
					<Tab label={obj.label} id={obj.id} />
				))}
			</Tabs>
			<div style={{ display: activeTab === "basics" ? "" : "none" }}>
				<Grid container spacing={2}>
					<Grid item lg={5} md={6} xl={6} xs={12}>
						<AccountProfile />
					</Grid>
					<Grid item lg={7} md={6} xl={6} xs={12}>
						<AccountDetails />
					</Grid>
				</Grid>
			</div>
			<div style={{ display: activeTab === "about" ? "" : "none" }}>
				<Preferences />
			</div>
			<div style={{ display: activeTab === "security" ? "" : "none" }}>
				<Grid container spacing={2}>
					<Grid item lg={5} md={8} xl={6} xs={12}>
						<Password />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

Account.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
