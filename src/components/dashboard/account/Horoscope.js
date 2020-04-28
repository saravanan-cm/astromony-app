import React from "react";
import {
	raasiList,
	nakshatras,
	lookingForList,
	statusList,
} from "../../../assets/dumps/basicLists";

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

const Horoscope = (props) => {
	const { values } = props;

	function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
	}

	return (
		<Grid container spacing={2}>
			<Card>
				<form>
					<CardHeader
						title='Horoscope Details'
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
									name='lookingFor'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.lookingFor}
									variant='outlined'>
									{lookingForList.map((option) => (
										<option
											key={option.key}
											value={option.label}>
											{option.label}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Status'
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

export default Horoscope;
