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
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
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
								<EditRoundedIcon />
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
									readOnly: !values.editDetails,
								}}
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
									readOnly: !values.editDetails,
								}}
								onChange={handleChange}
								required
								value={values.email}
								variant='outlined'
							/>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardActions
					style={{ display: values.editDetails ? "" : "none" }}>
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
