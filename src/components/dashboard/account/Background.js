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
import SocialMedia from "./SocialMedia";
import Myself from "./Myself";
import MoreAboutMe from "./MoreAboutMe";
import Address from "./Address";

const Background = (props) => {
	const { values } = props;

	const handleChange = (name, value) => {
		props.onChange(name, value);
	};

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				<Card>
					<CardHeader
						title='Education'
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
						<Grid container spacing={4}>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<Work values={values} onChange={handleChange} />
							</Grid>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<Address
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
						title='More about myself'
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
						<Grid container spacing={4}>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<MoreAboutMe
									values={values}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item lg={6} md={6} xl={6} xs={12}>
								<Myself
									values={values}
									onChange={handleChange}
								/>
							</Grid>
							<Grid item lg={12} md={12} xl={12} xs={12}>
								<SocialMedia
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
		</Grid>
	);
};

export default Background;
