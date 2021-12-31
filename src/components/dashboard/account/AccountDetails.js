import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Grid,
	IconButton,
	Button,
	TextField,
	withStyles,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import GoogleAutocomplete from "../../misc/GoogleAutocomplete";

const styles = (theme) => ({
	root: {},
});

const AccountDetails = (props) => {
	const { classes, className, values } = props;

	const handleClick = (name, value) => {
		console.log("inside handleclick:   ", name, value);
		props.onChange(name, value);
	};

	const handleCheckboxChange = (event) => {
		let val = event.target.checked ? 1 : 0;
		props.onChange(event.target.name, val);
	};

	const handleChange = (event) => {
		props.onChange(event.target.name, event.target.value);
	};

	function handleDateChange(date) {
		props.onChange("dob", date);
	}

	return (
		<Card className={clsx(classes.root, className)}>
			<form autoComplete='off' noValidate>
				<CardHeader
					title='Profile'
					action={
						<div>
							<IconButton
								color='primary'
								aria-label='Edit'
								onClick={() =>
									handleClick(
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
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='ID'
								margin='dense'
								name='uid'
								required
								InputProps={{
									readOnly: true,
								}}
								value={values.uid}
								disabled
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Full name'
								margin='dense'
								name='name'
								onChange={handleChange}
								required
								InputProps={{
									readOnly: !values.editDetails,
								}}
								value={values.name}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<DateTimePicker
									margin='dense'
									label='Date of Birth (with time)'
									inputVariant='outlined'
									value={values.dob}
									name='dob'
									fullWidth
									maxDate={values.maxDate}
									minDate={values.minDate}
									readOnly={!values.editDetails}
									onChange={handleDateChange}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item md={6} xs={12}>
							<GoogleAutocomplete
								label='Birth Place'
								keyname='hometown'
								readOnly={!values.editDetails}
								place={values.hometown}
								onChange={handleClick}
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Phone Number'
								margin='dense'
								name='phone'
								onChange={handleChange}
								type='number'
								InputProps={{
									readOnly: true,
								}}
								disabled
								value={values.phone}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Email Address'
								margin='dense'
								name='email'
								InputProps={{
									readOnly: true,
								}}
								onChange={handleChange}
								required
								disabled
								value={values.email}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormGroup row style={{ marginLeft: "2%" }}>
								<FormControlLabel
									control={
										<Checkbox
											disabled= {!values.editDetails}
											checked={values.samecaste}
											onChange={handleCheckboxChange}
											name='samecaste'
										/>
									}
									label={
										<span
											style={{
												fontSize: "0.75rem",
												fontStyle: "italic",
											}}>
											{
												"Show only same caste?"
											}
										</span>
									}
								/>
							</FormGroup>
						</Grid>
						<Grid item md={6} xs={12}>
							<FormGroup row style={{ marginLeft: "2%" }}>
								<FormControlLabel
									control={
										<Checkbox
											disabled= {!values.editDetails}
											checked={values.samegothram}
											onChange={handleCheckboxChange}
											name='samegothram'
										/>
									}
									label={
										<span
											style={{
												fontSize: "0.75rem",
												fontStyle: "italic",
											}}>
											{
												"Exclude same gothram?"
											}
										</span>
									}
								/>
							</FormGroup>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions
					style={{ display: values.editDetails ? "block" : "none", textAlign: "right", padding: "2%"}}>
					<Button
						color='primary'
						variant='contained'
						onClick={props.updateData}>
						Save details
					</Button>
				</CardActions>
			</form>
		</Card>
	);
};

AccountDetails.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountDetails);
