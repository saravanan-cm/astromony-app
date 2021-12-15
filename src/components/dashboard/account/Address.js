import React, { useState } from "react";

import {
	Card,
	CardContent,
	Grid,
	TextField,
	FormGroup,
	FormControlLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const Address = (props) => {
	const { values } = props;

	const [checkedVal, setcheckedVal] = useState(values.sameadd);

	function handleChange(event) {
		if (event.target.name === "sameadd") {
			setcheckedVal(!checkedVal);
		}
		var ipvalue =
			event.target.name === "sameadd"
				? event.target.checked
				: event.target.value;
		props.onChange(event.target.name, ipvalue);
	}

	return (
		<Card>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Permanent Address'
							margin='dense'
							name='paddress'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							inputProps={{ maxLength: 600 }}
							value={values.paddress}
							id='outlined-multiline-static'
							multiline
							rows={5}
							variant='outlined'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label='Residential Address'
							margin='dense'
							name='taddress'
							onChange={handleChange}
							InputProps={{
								readOnly: !values.editDetails,
							}}
							inputProps={{ maxLength: 600 }}
							value={
								checkedVal ? values.paddress : values.taddress
							}
							id='outlined-multiline-static'
							multiline
							rows={5}
							variant='outlined'
						/>
					</Grid>
					<FormGroup row style={{ marginLeft: "2%" }}>
						<FormControlLabel
							control={
								<Checkbox
									disabled= {!values.editDetails}
									checked={values.sameadd}
									onChange={handleChange}
									name='sameadd'
								/>
							}
							label={
								<span
									style={{
										fontSize: "0.75rem",
										fontStyle: "italic",
									}}>
									{
										"Is your residential address same as permanent?"
									}
								</span>
							}
						/>
					</FormGroup>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Address;
