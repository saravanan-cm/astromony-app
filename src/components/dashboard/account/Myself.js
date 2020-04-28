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
		</Card>
	);
};

export default Myself;
