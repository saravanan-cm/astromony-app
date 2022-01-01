import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Button,
	TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	root: {},
}));

const Password = (props) => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const [values, setValues] = useState({
		password: "",
		confirm: "",
		current: ""
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<Card>
			<form>
				<CardHeader subheader='Update password' title='Password' />
				<Divider />
				<CardContent>
					<TextField
						fullWidth
						label='Current password'
						name='current'
						onChange={handleChange}
						type='password'
						value={values.current}
						variant='outlined'
					/>
					<TextField
						fullWidth
						label='New password'
						name='password'
						onChange={handleChange}
						style={{ marginTop: "1rem" }}
						type='password'
						value={values.password}
						variant='outlined'
					/>
					<TextField
						fullWidth
						label='Confirm password'
						name='confirm'
						onChange={handleChange}
						style={{ marginTop: "1rem" }}
						type='password'
						value={values.confirm}
						variant='outlined'
					/>
				</CardContent>
				<Divider />
				<CardActions style={{display: "block", textAlign: "right", padding: "3%"}}>
					<Button color='primary' variant='contained'>
						Update
					</Button>
				</CardActions>
			</form>
		</Card>
	);
};

Password.propTypes = {
	className: PropTypes.string,
};

export default Password;
