import React, { useState } from "react";

import {
	Divider,
	Grid,
	IconButton,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Button,
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import Work from "./Work";
import FamilyDetails from "./FamilyDetails";
import Myself from "./Myself";

const Background = (props) => {
	var today = new Date();
	var minDate = today.setFullYear(today.getFullYear() - 18);
	const [values, setValues] = useState({
		gender: null,
		dob: null,
		height: null,
		weight: null,
		tone: null,
		raasi: null,
		nakshatra: null,
		lookingFor: null,
		status: null,
		education: null,
		work: null,
		company: null,
		location: null,
		workLocation: null,
		salary: null,
		hobby: null,
		about: null,
		expectations: null,
		minDate: new Date("1950-01-01T00:00:00"),
		maxDate: minDate,
		visaStatus: null,
		famStatus: null,
		address: null,
		familyName: null,
		gothram: null,
		fatherName: null,
		fatherOcc: null,
		motherName: null,
		motherOcc: null,
		sisters: 0,
		marriedSisters: 0,
		brothers: 0,
		marriedBrothers: 0,
		editDetails: true, // By default have to set it to false to disable edit
	});

	const handleChange = (name, value) => {
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						title='Background'
						action={
							<div>
								<IconButton
									color='primary'
									aria-label='Edit'
									onClick={() =>
										handleChange(
											"editDetails",
											!values.editDetails
										)
									}>
									{values.editDetails ? (
										<ClearRoundedIcon />
									) : (
										<EditRoundedIcon />
									)}
								</IconButton>
							</div>
						}
					/>
					<Divider />
					<CardContent style={{ backgroundColor: "#f6f7f4" }}>
						<Grid container spacing={4}>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<Work values={values} onChange={handleChange} />
							</Grid>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<FamilyDetails
									values={values}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<Myself
									values={values}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
					</CardContent>
					<Divider />
					<CardActions
						style={{ display: values.editDetails ? "" : "none" }}>
						<Button color='primary' variant='contained'>
							Update
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Background;
