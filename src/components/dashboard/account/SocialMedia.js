import React from "react";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";

const SocialMedia = (props) => {
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
							label='Facebook'
							margin='dense'
							name='facebook'
							onChange={handleChange}
							placeholder='Enter your facebook profile link'
                            disabled={!values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.facebook}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Instagram'
							margin='dense'
							name='instagram'
							onChange={handleChange}
                            placeholder='Enter your instagram profile link'
                            disabled={!values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.instagram}
							variant='outlined'
						/>
					</Grid>
                    <Grid item xs={12}>
						<TextField
							fullWidth
							label='Twitter'
							margin='dense'
							name='twitter'
							onChange={handleChange}
                            placeholder='Enter your twitter profile link'
                            disabled={!values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.twitter}
							variant='outlined'
						/>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default SocialMedia;
