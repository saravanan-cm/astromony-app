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
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Address'
							margin='dense'
							name='address'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.about}
							id='outlined-multiline-static'
							multiline
							rows={10}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='About'
							margin='dense'
							name='about'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.about}
							id='outlined-multiline-static'
							multiline
							rows={4}
							variant='outlined'
						/>
						<TextField
							fullWidth
							label='Preference'
							margin='dense'
							name='expectations'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.expectations}
							id='outlined-multiline-static'
							multiline
							rows={4}
							variant='outlined'
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Myself;
