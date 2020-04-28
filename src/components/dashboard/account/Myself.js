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


const Myself = (props) => {
	const { values } = props;

    function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
    }
    
	return (
		<Grid container spacing={2}>
			<Card>
				<form>
					<CardHeader
						title='About'
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

export default Myself;