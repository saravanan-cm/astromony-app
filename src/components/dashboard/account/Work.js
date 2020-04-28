import React from "react";

import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Button,
	Grid,
	IconButton,
	TextField,
} from "@material-ui/core";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

const Work = (props) => {
    const { values } = props;
    
    function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
	}

	return (
		<Grid container spacing={2}>
			<Card>
				<form>
					<CardHeader
						title='Work Details'
						action={
							<div>
								<IconButton
									color='primary'
									aria-label='Edit'
									onClick={() =>
										props.onChange(
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
							<Grid item xs={12}>
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
							<Grid item xs={12}>
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
							<Grid item xs={12}>
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
							<Grid item xs={12}>
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

export default Work;
