import React from "react";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import { visaList } from "../../../assets/dumps/basicLists";

const FamilyDetails = (props) => {
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
							label='Family Name (if any)'
							margin='dense'
							name='familyName'
							onChange={handleChange}
							placeholder='For eg: Chinnakonda'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.familyName}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Gothram'
							margin='dense'
							name='gothram'
							onChange={handleChange}
							placeholder='For eg: Jabali'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.gothram}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Sisters'
							margin='dense'
							name='sisters'
							type='number'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.sisters}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Married sisters'
							margin='dense'
							name='marriedSisters'
							type='number'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.marriedSisters}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Brothers'
							margin='dense'
							name='brothers'
							type='number'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.brothers}
							variant='outlined'
						/>
					</Grid>
					<Grid item lg={6} md={6} xl={6} xs={12}>
						<TextField
							fullWidth
							label='Married brothers'
							margin='dense'
							name='marriedBrothers'
							type='number'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.marriedBrothers}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Visa Status'
							name='visaStatus'
							margin='dense'
							onChange={handleChange}
							select={values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							SelectProps={{ native: true }}
							value={values.visaStatus}
							variant='outlined'>
							{visaList.map((option, idx) => (
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

export default FamilyDetails;
