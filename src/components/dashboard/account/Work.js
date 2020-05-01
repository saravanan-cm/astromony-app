import React from "react";
import GoogleAutocomplete from "../../misc/GoogleAutocomplete";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";

const Work = (props) => {
	const { values } = props;

	function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
	}

	function handleClick(name, value){
		props.onChange('workLocation', value);
	}

	return (
		<Card>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Education'
							margin='dense'
							name='education'
							onChange={handleChange}
							placeholder='For eg: Electronics and Communications Engineering'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.education}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Work'
							margin='dense'
							name='work'
							onChange={handleChange}
							placeholder='For eg: Senior Software Engineer'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.work}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Company Name'
							margin='dense'
							name='company'
							onChange={handleChange}
							placeholder='For eg: ABCXYZ Technologies'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.company}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<GoogleAutocomplete onChange={handleClick} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Work;