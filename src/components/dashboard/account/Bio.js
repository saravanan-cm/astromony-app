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
import BirthDetails from "./BirthDetails";
import FamilyDetails from "./FamilyDetails";
import Horoscope from "./Horoscope";

const Bio = (props) => {
	const { values } = props;
	const handleChange = (name, value) => {
		props.onChange(name, value);
	};

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						title='Birth Details'
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
					<CardContent style={{ backgroundImage: "linear-gradient(rgb(249, 249, 249) 0%, rgb(245, 245, 245) 51%, rgb(243, 241, 241) 75%)" }}>
						<Grid container spacing={4}>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<BirthDetails
									values={values}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<Horoscope
									values={values}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
					</CardContent>
					<Divider />
					<CardActions
						style={{ display: values.editDetails ? "block" : "none", textAlign: "right", padding: "1%"}}>
						<Button
							color='primary'
							variant='contained'
							onClick={props.updateData}>
							Update
						</Button>
					</CardActions>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						title='Family Details'
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
					<CardContent
						style={{
							backgroundImage:
								"linear-gradient(rgb(249, 249, 249) 0%, rgb(245, 245, 245) 51%, rgb(243, 241, 241) 75%)",
						}}>
						<FamilyDetails
							values={values}
							onChange={handleChange}
						/>
					</CardContent>
					<Divider />
					<CardActions
						style={{ display: values.editDetails ? "block" : "none", textAlign: "right", padding: "1%"}}>
						<Button
							color='primary'
							variant='contained'
							onClick={props.updateData}>
							Update
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Bio;
