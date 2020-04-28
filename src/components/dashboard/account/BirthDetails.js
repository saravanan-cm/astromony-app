import React from "react";
import { heightList, tone, genderList } from "../../../assets/dumps/basicLists";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";

const BirthDetails = (props) => {
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
								<option key={option.key} value={option.label}>
									{option.label}
								</option>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12}>
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
					<Grid item xs={12}>
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
					<Grid item xs={12}>
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
				</Grid>
			</CardContent>
		</Card>
	);
};

export default BirthDetails;
