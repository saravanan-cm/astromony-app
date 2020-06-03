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
									name='famname'
									onChange={handleChange}
									placeholder='For eg: Chinnakonda'
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.famname}
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
									name='mothertongue'
									margin='dense'
									onChange={handleChange}
									required
									select={values.editDetails}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									// eslint-disable-next-line react/jsx-sort-props
									SelectProps={{ native: true }}
									value={values.mothertongue}
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
									name='dad'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.dad}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Occupation'
									margin='dense'
									name='dadocc'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.dadocc}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Mother Name'
									margin='dense'
									name='mom'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.mom}
									variant='outlined'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									label='Occupation'
									margin='dense'
									name='momocc'
									onChange={handleChange}
									InputProps={{
										readOnly: !values.editDetails,
									}}
									value={values.momocc}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Sisters'
									margin='dense'
									name='sis'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.sis}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Married sisters'
									margin='dense'
									name='sismrg'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.sismrg}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Brothers'
									margin='dense'
									name='bro'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.bro}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									fullWidth
									label='Married brothers'
									margin='dense'
									name='bromrg'
									type='number'
									onChange={handleChange}
									InputProps={{
										inputProps: { min: 0, max: 15 },
										readOnly: !values.editDetails,
									}}
									value={values.bromrg}
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
