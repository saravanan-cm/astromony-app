import React, { useState } from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import {
	heightList,
	tone,
	raasiList,
	nakshatras,
	genderList,
	lookingForList,
	statusList,
} from "../../../assets/dumps/basicLists";

import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	makeStyles,
	Button,
	Grid,
	IconButton,
	Paper,
	TextField,
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

const Password = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

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
		salary: null,
		hobby: null,
		about: null,
		expectations: null,
		minDate: new Date("1950-01-01T00:00:00"),
		maxDate: new Date(),
		visaStatus: false,
		editDetails: true, // By default have to set it to false to disable edit
	});

	const handleClick = (name, value) => {
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

	const [selectedDate, setSelectedDate] = React.useState(
		new Date("1995-04-14T12:30:00")
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<Grid container spacing={2}>
			<Card>
				<form>
					<CardHeader
						subheader='Please provide your basic preferences to find a best match'
						title='Basic Preferences'
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
						<Grid container spacing={2}>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Gender'
									name='gender'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.gender}
									variant='outlined'>
									{genderList.map((option) => (
										<option
											key={option.key}
											value={option.label}>
											{option.label}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Height'
									name='height'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.height}
									variant='outlined'>
									{heightList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Weight in KG'
									margin='dense'
									name='weight'
									onChange={handleChange}
									required
									type='number'
									InputProps={{
										readOnly: !values.editDetails,
										inputProps: { min: 2, max: 700 },
									}}
									defaultValue={50}
									value={values.weight}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Skin tone'
									name='tone'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.tone}
									variant='outlined'>
									{tone.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12} lg={4}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<KeyboardDatePicker
										margin='dense'
										id='date-picker-dialog'
										label='Date of Birth'
										format='MM/dd/yyyy'
										inputVariant='outlined'
										maxDate={values.maxDate}
										minDate={values.minDate}
										value={selectedDate}
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
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Zodiac/Raasi'
									name='raasi'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.raasi}
									variant='outlined'>
									{raasiList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Nakshatra'
									name='nakshatra'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.nakshatra}
									variant='outlined'>
									{nakshatras.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Looking for a'
									name='lookingFor'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.lookingFor}
									variant='outlined'>
									{lookingForList.map((option) => (
										<option
											key={option.key}
											value={option.label}>
											{option.label}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={6} lg={4}>
								<TextField
									fullWidth
									label='Status'
									name='status'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.status}
									variant='outlined'>
									{statusList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12} lg={6}>
								<TextField
									fullWidth
									label='Education'
									margin='dense'
									name='education'
									onChange={handleChange}
									required
									placeholder='For eg: Electronics and Communications Engineering'
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.education}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<TextField
									fullWidth
									label='Work'
									margin='dense'
									name='work'
									onChange={handleChange}
									required
									placeholder='For eg: Senior Software Engineer'
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.work}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<TextField
									fullWidth
									label='Company Name'
									margin='dense'
									name='company'
									onChange={handleChange}
									required
									placeholder='For eg: ABCXYZ Technologies'
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.company}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12} lg={6}>
								<TextField
									fullWidth
									label='Work Location'
									margin='dense'
									name='location'
									onChange={handleChange}
									required
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.location}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='About'
									margin='dense'
									name='about'
									onChange={handleChange}
									required
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.about}
									id='outlined-multiline-static'
									multiline
									rows={4}
									rowsMax={10}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Preference'
									margin='dense'
									name='expectations'
									onChange={handleChange}
									required
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.expectations}
									id='outlined-multiline-static'
									multiline
									rows={4}
									rowsMax={10}
									variant='outlined'
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
				</form>
			</Card>
		</Grid>
	);
};

Password.propTypes = {
	className: PropTypes.string,
};

export default Password;
