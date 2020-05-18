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
	const { classes, className, ...rest } = props;
	var today = new Date();
	var maxDate = today.setFullYear(today.getFullYear() - 18);

	const [values, setValues] = useState({
		fullName: "Shen",
		email: "shen.zhi@devias.io",
		phone: "",
		location: "",
		city: null,
		country: null,
		editProfile: false,
		uid: "DGH76DF4",
		dob: null,
		minDate: new Date("1950-01-01T00:00:00"),
		maxDate: maxDate,
	});
	const handleClick = (name, value) => {
		console.log("inside handleclick:   ", name, value);
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	function handleDateChange(date) {
		var dob = "dob";
		setValues({
			...values,
			[dob]: date,
		});
	}

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
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
										"editProfile",
										!values.editProfile
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
								name='fullName'
								onChange={handleChange}
								required
								InputProps={{
									readOnly: !values.editProfile,
								}}
								value={values.fullName}
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
									maxDate={values.maxDate}
									minDate={values.minDate}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									onChange={handleDateChange}
								/>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item md={6} xs={12}>
							<GoogleAutocomplete
								label='Birth Place'
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
									readOnly: !values.editProfile,
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
									readOnly: !values.editProfile,
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
					style={{ display: values.editProfile ? "" : "none" }}>
					<Button color='primary' variant='contained'>
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
