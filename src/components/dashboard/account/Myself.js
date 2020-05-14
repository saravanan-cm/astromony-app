import React from "react";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";

const Myself = (props) => {
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
							label='About (in 2000 chars)'
							margin='dense'
							name='about'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							placeholder='We are giving you 2000 characters to describe yourself'
							inputProps={{ maxLength: 2000 }}
							value={values.about}
							id='outlined-multiline-static'
							multiline
							rows={5}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Preference (in 2000 chars)'
							margin='dense'
							name='expectations'
							onChange={handleChange}
							placeholder='Awesome, you have 2000 characters left to open up your heart'
							inputProps={{ maxLength: 2000 }}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.expectations}
							id='outlined-multiline-static'
							multiline
							rows={5}
							variant='outlined'
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Myself;
