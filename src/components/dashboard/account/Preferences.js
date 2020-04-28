import React, { useState } from "react";

import { Grid } from "@material-ui/core";
import BirthDetails from "./BirthDetails";
import Horoscope from "./Horoscope";
import Work from "./Work";
import Myself from "./Myself";

const Preferences = (props) => {
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

	const handleChange = (name, value) => {
		console.log(
			"entered parent handle change with name, value:  ",
			name,
			value
		);
		setValues({
			...values,
			[name]: value,
		});
	};

	return (
		<Grid container spacing={4}>
			<Grid item lg={4} md={6} xl={6} xs={12}>
				<BirthDetails values={values} onChange={handleChange} />
			</Grid>
			<Grid item lg={4} md={6} xl={6} xs={12}>
				<Horoscope values={values} onChange={handleChange} />
			</Grid>
			<Grid item lg={4} md={6} xl={6} xs={12}>
				<Work values={values} onChange={handleChange} />
			</Grid>
			<Grid item lg={12} md={12} xl={12} xs={12}>
				<Myself values={values} onChange={handleChange} />
			</Grid>
		</Grid>
		// <Grid container spacing={2}>
		// 	<Card>
		// 		<CardHeader
		// 			subheader='Please provide your basic preferences to find a best match'
		// 			title='Basic Preferences'
		// 			action={
		// 				<div>
		// 					<IconButton
		// 						color='primary'
		// 						aria-label='Edit'
		// 						onClick={() =>
		// 							handleClick(
		// 								"editDetails",
		// 								!values.editDetails
		// 							)
		// 						}>
		// 						<EditRoundedIcon />
		// 					</IconButton>
		// 				</div>
		// 			}
		// 		/>
		// 		<Divider />
		// 		<CardContent>
		// 			<Grid container spacing={2}>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Gender'
		// 						name='gender'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.gender}
		// 						variant='outlined'>
		// 						{genderList.map((option) => (
		// 							<option
		// 								key={option.key}
		// 								value={option.label}>
		// 								{option.label}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Height'
		// 						name='height'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.height}
		// 						variant='outlined'>
		// 						{heightList.map((option, idx) => (
		// 							<option key={idx} value={option}>
		// 								{option}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Weight in KG'
		// 						margin='dense'
		// 						name='weight'
		// 						onChange={handleChange}
		// 						required
		// 						type='number'
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 							inputProps: { min: 2, max: 700 },
		// 						}}
		// 						defaultValue={50}
		// 						value={values.weight}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Skin tone'
		// 						name='tone'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.tone}
		// 						variant='outlined'>
		// 						{tone.map((option, idx) => (
		// 							<option key={idx} value={option}>
		// 								{option}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={12} lg={4}>
		// 					<MuiPickersUtilsProvider utils={DateFnsUtils}>
		// 						<KeyboardDatePicker
		// 							margin='dense'
		// 							id='date-picker-dialog'
		// 							label='Date of Birth'
		// 							format='MM/dd/yyyy'
		// 							inputVariant='outlined'
		// 							maxDate={values.maxDate}
		// 							minDate={values.minDate}
		// 							value={values.dob}
		// 							onChange={handleDateChange}
		// 							InputProps={{
		// 								readOnly: !values.editDetails,
		// 							}}
		// 							KeyboardButtonProps={{
		// 								"aria-label": "change date",
		// 							}}
		// 						/>
		// 					</MuiPickersUtilsProvider>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Zodiac/Raasi'
		// 						name='raasi'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.raasi}
		// 						variant='outlined'>
		// 						{raasiList.map((option, idx) => (
		// 							<option key={idx} value={option}>
		// 								{option}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Nakshatra'
		// 						name='nakshatra'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.nakshatra}
		// 						variant='outlined'>
		// 						{nakshatras.map((option, idx) => (
		// 							<option key={idx} value={option}>
		// 								{option}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Looking for a'
		// 						name='lookingFor'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.lookingFor}
		// 						variant='outlined'>
		// 						{lookingForList.map((option) => (
		// 							<option
		// 								key={option.key}
		// 								value={option.label}>
		// 								{option.label}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={6} lg={4}>
		// 					<TextField
		// 						fullWidth
		// 						label='Status'
		// 						name='status'
		// 						margin='dense'
		// 						onChange={handleChange}
		// 						required
		// 						select={values.editDetails}
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						// eslint-disable-next-line react/jsx-sort-props
		// 						SelectProps={{ native: true }}
		// 						value={values.status}
		// 						variant='outlined'>
		// 						{statusList.map((option, idx) => (
		// 							<option key={idx} value={option}>
		// 								{option}
		// 							</option>
		// 						))}
		// 					</TextField>
		// 				</Grid>
		// 				<Grid item xs={12} lg={6}>
		// 					<TextField
		// 						fullWidth
		// 						label='Education'
		// 						margin='dense'
		// 						name='education'
		// 						onChange={handleChange}
		// 						required
		// 						placeholder='For eg: Electronics and Communications Engineering'
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.education}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={12} lg={6}>
		// 					<TextField
		// 						fullWidth
		// 						label='Work'
		// 						margin='dense'
		// 						name='work'
		// 						onChange={handleChange}
		// 						required
		// 						placeholder='For eg: Senior Software Engineer'
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.work}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={12} lg={6}>
		// 					<TextField
		// 						fullWidth
		// 						label='Company Name'
		// 						margin='dense'
		// 						name='company'
		// 						onChange={handleChange}
		// 						required
		// 						placeholder='For eg: ABCXYZ Technologies'
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.company}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={12} lg={6}>
		// 					<TextField
		// 						fullWidth
		// 						label='Work Location'
		// 						margin='dense'
		// 						name='location'
		// 						onChange={handleChange}
		// 						required
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.location}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<TextField
		// 						fullWidth
		// 						label='About'
		// 						margin='dense'
		// 						name='about'
		// 						onChange={handleChange}
		// 						required
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.about}
		// 						id='outlined-multiline-static'
		// 						multiline
		// 						rows={4}
		// 						rowsMax={10}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 				<Grid item xs={12}>
		// 					<TextField
		// 						fullWidth
		// 						label='Preference'
		// 						margin='dense'
		// 						name='expectations'
		// 						onChange={handleChange}
		// 						required
		// 						InputProps={{
		// 							readOnly: !values.editDetails,
		// 						}}
		// 						value={values.expectations}
		// 						id='outlined-multiline-static'
		// 						multiline
		// 						rows={4}
		// 						rowsMax={10}
		// 						variant='outlined'
		// 					/>
		// 				</Grid>
		// 			</Grid>
		// 		</CardContent>
		// 		<Divider />
		// 		<CardActions
		// 			style={{ display: values.editDetails ? "" : "none" }}>
		// 			<Button color='primary' variant='contained'>
		// 				Update
		// 			</Button>
		// 		</CardActions>
		// 	</Card>
		// </Grid>
	);
};

export default Preferences;
