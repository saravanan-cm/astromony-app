import React from "react";
import {
	raasiList,
	nakshatras,
	lookingForList,
	statusList,
} from "../../../assets/dumps/basicLists";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";

const Horoscope = (props) => {
	const { values } = props;

	function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
	}

	return (
		<Card>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
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
					<Grid item xs={12}>
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
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Looking for a'
							margin='dense'
							name='lookingfor'
							onChange={handleChange}
							placeholder='Groom/Bride'
							disabled
							InputProps={{
								readOnly: true,
							}}
							value={values.lookingfor}
							variant='outlined'>
							{/* fullWidth
							label='Looking for a'
							name='lookingfor'
							margin='dense'
							disabled
							onChange={handleChange}
							required
							select={values.editDetails}
							InputProps={{
								readOnly: true,
							}}
							// eslint-disable-next-line react/jsx-sort-props
							SelectProps={{ native: true }}
							value={values.lookingfor}
							variant='outlined'> */}
							{/* {lookingForList.map((option) => (
								<option key={option.key} value={option.label}>
									{option.label}
								</option>
							))} */}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Marital Status'
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
							defaultChecked={"Single"}
							variant='outlined'>
							{statusList.map((option, idx) => (
								<option key={idx} value={option}>
									{option}
								</option>
							))}
						</TextField>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Horoscope;
