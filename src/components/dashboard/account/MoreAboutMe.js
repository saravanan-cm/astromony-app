import React from "react";

import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import {
	yesOrNo,
	habitsList,
	bodyTypeList,
} from "../../../assets/dumps/basicLists";

const MoreAboutMe = (props) => {
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
							label='Hobbies'
							margin='dense'
							name='hobby'
							onChange={handleChange}
							placeholder='For eg: Pencil Sketching, Cricket'
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.hobby}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Dosham'
							margin='dense'
							name='dosham'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							value={values.dosham}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Disability'
							name='disability'
							margin='dense'
							onChange={handleChange}
							select={values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							SelectProps={{ native: true }}
							value={values.disability}
							variant='outlined'>
							{yesOrNo.map((option, idx) => (
								<option key={idx} value={option.value}>
									{option.key}
								</option>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Social Habits'
							name='habits'
							margin='dense'
							onChange={handleChange}
							select={values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							SelectProps={{ native: true }}
							value={values.habits}
							variant='outlined'>
							{habitsList.map((option, idx) => (
								<option key={idx} value={option}>
									{option}
								</option>
							))}
						</TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Body Type'
							name='bodytype'
							margin='dense'
							onChange={handleChange}
							select={values.editDetails}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							SelectProps={{ native: true }}
							value={values.bodytype}
							variant='outlined'>
							{bodyTypeList.map((option, idx) => (
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

export default MoreAboutMe;
