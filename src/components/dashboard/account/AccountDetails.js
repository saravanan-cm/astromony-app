import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
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

	const [values, setValues] = useState({
		firstName: "Shen",
		lastName: "Zhi",
		email: "shen.zhi@devias.io",
		phone: "",
		location: "",
		city: null,
		country: null,
		editProfile: false,
		uid: "DGH76DF4",
		dob: null,
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
								label='First name'
								margin='dense'
								name='firstName'
								onChange={handleChange}
								required
								InputProps={{
									readOnly: !values.editProfile,
								}}
								value={values.firstName}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Last name'
								margin='dense'
								name='lastName'
								onChange={handleChange}
								required
								InputProps={{
									readOnly: !values.editProfile,
								}}
								value={values.lastName}
								variant='outlined'
							/>
						</Grid>
						<Grid item md={6} xs={12}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									margin='dense'
									id='date-picker-dialog'
									label='Date of Birth'
									format='MM/dd/yyyy'
									name='dob'
									inputVariant='outlined'
									maxDate={values.maxDate}
									minDate={values.minDate}
									value={values.dob}
									onChange={handleDateChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									KeyboardButtonProps={{
										"aria-label": "change date",
									}}
								/>
							</MuiPickersUtilsProvider>
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
							<GoogleAutocomplete onChange={handleClick} />
						</Grid>
						{/* <Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Select State'
								helperText='Please specify the home town'
								margin='dense'
								name='state'
								onChange={handleChange}
								required
								select={values.editProfile}
								InputProps={{
									readOnly: !values.editProfile,
								}}
								// eslint-disable-next-line react/jsx-sort-props
								SelectProps={{ native: true }}
								value={values.state}
								variant='outlined'>
								{states.map((option) => (
									<option
										key={option.value}
										value={option.value}>
										{option.label}
									</option>
								))}
							</TextField>
						</Grid>
						<Grid item md={6} xs={12}>
							<TextField
								fullWidth
								label='Country'
								margin='dense'
								name='country'
								onChange={handleChange}
								required
								InputProps={{
									readOnly: !values.editProfile,
								}}
								value={values.country}
								variant='outlined'
							/>
						</Grid>
					 */}
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
