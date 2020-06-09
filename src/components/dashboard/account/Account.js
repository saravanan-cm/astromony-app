import React, { useEffect, useState } from "react";
import { Grid, withStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import AccountDetails from "./AccountDetails";
import AccountProfile from "./AccountProfile";
import Password from "./Password";
import Bio from "./Bio";
import Background from "./Background";
import api from "../../../actions/makeAPICall";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSnackbar } from "notistack";

const styles = (theme) => ({
	root: {},
	leftLoader: {
		[theme.breakpoints.up("md")]: {
			marginRight: "5%",
			width: "45%",
			height: 400,
		},
		[theme.breakpoints.down("md")]: {
			marginRight: "5%",
			width: "90%",
			height: 400,
		},
	},
	rightLoader: {
		[theme.breakpoints.up("md")]: {
			display: "",
			marginRight: "10%",
			width: "45%",
			height: 400,
		},
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
});

const Account = (props) => {
	var { classes, userDetails, myData } = props;
	var [data, setData] = useState(myData);
	var [value, setValue] = useState(0);
	var [activeTab, setActiveTab] = useState("basics");
	var { enqueueSnackbar } = useSnackbar();
	var navBarList = [
		{
			id: 9,
			label: "Basics",
			name: "basics",
		},
		{
			id: 8,
			label: "Birth Details",
			name: "birthdetails",
		},
		{
			id: 10,
			label: "Background",
			name: "background",
		},
		{
			id: 6,
			label: "Security",
			name: "security",
		},
	];

	useEffect(() => {
		getData();
	});

	async function getData() {
		// userDetails.email
		let response = {};
		if (myData && Object.keys(myData).length) {
			setData(myData);
		} else {
			response = await api.getMyData("saracmmce@gmail.com");
		}
		if ("status" in response) {
			let today = new Date();
			let maxDate = today.setFullYear(today.getFullYear() - 18);
			let resData = response.data.data;
			resData["minDate"] = new Date("1950-01-01T00:00:00");
			resData["maxDate"] = maxDate;
			resData["editDetails"] = false;
			setData(resData);
			props.onChange("data", resData);
		}
	}

	const updateData = (skip = false) => {
		if (!skip) {
			let variant = "success";
			enqueueSnackbar("Successfully Updated", { variant });
		}
		api.updateMyData(data);
		data.editDetails = false;
		props.onChange("data", data);
	};

	const handleChange = (name, value) => {
		if (name === "images") {
			value = data.images ? data.images.push(value) : [value];
			setData({ ...data, [name]: value });
			updateData(true);
		} else {
			setData({
				...data,
				[name]: value,
			});
		}
		props.onChange("data", data);
	};

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
		setActiveTab(navBarList[newValue]["name"]);
	};

	return (
		<div className={classes.root}>
			{data ? (
				<div>
					<Tabs
						value={value}
						onChange={handleTabChange}
						indicatorColor='primary'
						textColor='primary'
						variant='scrollable'
						scrollButtons='auto'
						style={{ marginBottom: "1%", float: "left" }}>
						{navBarList.map((obj, index) => (
							<Tab label={obj.label} id={index} />
						))}
					</Tabs>
					<div
						style={{
							display: activeTab === "basics" ? "" : "none",
						}}>
						<Grid container spacing={2}>
							<Grid item lg={5} md={6} xl={6} xs={12}>
								<AccountProfile
									values={data}
									onChange={handleChange}
									updateData={updateData}
								/>
							</Grid>
							<Grid item lg={7} md={6} xl={6} xs={12}>
								<AccountDetails
									values={data}
									onChange={handleChange}
									updateData={updateData}
								/>
							</Grid>
						</Grid>
					</div>
					<div
						style={{
							display: activeTab === "birthdetails" ? "" : "none",
						}}>
						<Bio
							values={data}
							onChange={handleChange}
							updateData={updateData}
						/>
					</div>
					<div
						style={{
							display: activeTab === "background" ? "" : "none",
						}}>
						<Background
							values={data}
							onChange={handleChange}
							updateData={updateData}
						/>
					</div>
					<div
						style={{
							display: activeTab === "security" ? "" : "none",
						}}>
						<Grid container spacing={2}>
							<Grid item lg={5} md={8} xl={6} xs={12}>
								<Password />
							</Grid>
						</Grid>
					</div>
				</div>
			) : (
				<div style={{ marginLeft: "5%" }}>
					<Skeleton variant='rect' width={"90%"} height={30} />
					<br />
					<div style={{ display: "flex" }}>
						<Skeleton
							variant='rect'
							className={classes.leftLoader}
						/>
						<Skeleton
							variant='rect'
							className={classes.rightLoader}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

Account.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
