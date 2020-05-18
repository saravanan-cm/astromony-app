import React from "react";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import {
	motherTonguesList,
	religionList,
	casteList,
} from "../../../assets/dumps/basicLists";

const FamilyDetails = (props) => {
	const { values } = props;

	function handleChange(event) {
		props.onChange(event.target.name, event.target.value);
	}

	return (
		<Grid container spacing={4}>
			<Grid item lg={6} md={6} xl={6} xs={12}>
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
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
							<Grid item xs={12}>
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
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Mother tongue'
									name='mother_tongue'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.mother_tongue}
									variant='outlined'>
									{motherTonguesList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Religion'
									name='religion'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.religion}
									variant='outlined'>
									{religionList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Caste'
									name='caste'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.caste}
									variant='outlined'>
									{casteList.map((option, idx) => (
										<option key={idx} value={option}>
											{option}
										</option>
									))}
								</TextField>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Sub Caste'
									margin='dense'
									name='subcaste'
									onChange={handleChange}
									// placeholder='For eg: Jabali'
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.subcaste}
									variant='outlined'
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Grid item lg={6} md={6} xl={6} xs={12}>
				<Card>
					<CardContent>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Father Name'
									margin='dense'
									name='fatherName'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.fatherName}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Occupation'
									margin='dense'
									name='fatherOcc'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.fatherOcc}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Mother Name'
									margin='dense'
									name='motherName'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.motherName}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Occupation'
									margin='dense'
									name='motherOcc'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.motherOcc}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Sisters'
									margin='dense'
									name='sisters'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.sisters}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Married sisters'
									margin='dense'
									name='marriedSisters'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.marriedSisters}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Brothers'
									margin='dense'
									name='brothers'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.brothers}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Married brothers'
									margin='dense'
									name='marriedBrothers'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.marriedBrothers}
									variant='outlined'
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default FamilyDetails;
