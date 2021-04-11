import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import {
	TextField,
	DialogTitle,
	Grid,
	Dialog,
	withStyles,
	Switch,
	Card,
	CardContent,
	CardHeader,
	DialogActions,
	Typography,
	DialogContent,
	Divider,
	Slider,
	FormGroup,
	FormControlLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterBAndWIcon from "@material-ui/icons/FilterBAndW";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FilterListIcon from "@material-ui/icons/FilterList";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const styles = (theme) => ({
	root: {
		boxShadow: "none",
	},
	searchCards: {
		height: "100%",
		boxShadow: "none",
		border: "1px solid lightgray",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		maxWidth: 220,
		maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
	},
	ageValueStyle: {
		fontSize: "0.75rem",
		color: "darkslategray",
	},
	saveSearchTxt: {
		fontSize: "0.75rem",
	},
});

const SearchDialog = (props) => {
	const { classes, onChange } = props;
	const [uid, setUid] = React.useState(null);
	const [name, setNameVal] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [ageValue, setAgeValue] = React.useState([25, 30]);
	const [salValue, setSalValue] = React.useState([25, 70]);
	const [heightValue, setHeightValue] = React.useState([150, 180]);
	const [convHgtVal, setConvHgtVal] = React.useState(["4ft 9in", "5ft 9in"]);
	const [saveSearch, setSaveSearch] = React.useState(false);
	const [homeTown, setHomeTown] = React.useState([]);

	const handleHomeTown = (event) => {
		setHomeTown(event.target.value);
	};

	const names = [
		"Madurai",
		"Trichy",
		"Chennai",
		"Coimbatore",
		"Salem",
		"Dindigul",
	];

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = () => {
		setOpen(false);
		let ftr = {
			uid: uid,
			name: name,
			age: ageValue,
			salValue: salValue,
			heightValue: heightValue,
			convHgtVal: convHgtVal,
			homeTown: homeTown
		};
		onChange(ftr);
	};

	const handleAgeChange = (event, newValue) => {
		setAgeValue(newValue);
	};

	const handleSalChange = (event, newValue) => {
		setSalValue(newValue);
	};

	const handleIDChange = (event, newValue) => {
		setUid(event.target.value);
	};

	const handleNameChange = (event, newValue) => {
		setNameVal(event.target.value);
	};

	function toFeet(n) {
		var realFeet = (n * 0.3937) / 12;
		var feet = Math.floor(realFeet);
		var inches = Math.round((realFeet - feet) * 12);
		return feet + "ft " + inches + "in";
	}

	const handleHeightChange = (event, val) => {
		setHeightValue(val);
		setConvHgtVal([toFeet(val[0]), toFeet(val[1])]);
	};

	return (
		<div>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleClickOpen}>
				Filter <FilterListIcon style={{ marginLeft: "10%" }} />
			</Button>
			<Dialog
				open={open}
				maxWidth='md'
				fullWidth
				onClose={handleClose}
				aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>Filters</DialogTitle>
				<DialogContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Divider />
							<Card className={classes.root}>
								<CardHeader
									avatar={<SearchIcon />}
									title='Specific filters'
								/>
								<CardContent>
									<Grid container spacing={2}>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>ID</Typography>
													<TextField
														onChange={handleIDChange}
														fullWidth
														margin='dense'
														name='uid'
														placeholder='Enter any ID to search'
														variant='outlined'
													/>
												</CardContent>
											</Card>
										</Grid>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>
														Name
													</Typography>
													<TextField
														onChange={handleNameChange}
														fullWidth
														margin='dense'
														name='name'
														placeholder='Enter a name'
														variant='outlined'
													/>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12}>
							<Divider />
							<Card className={classes.root}>
								<CardHeader
									avatar={<FilterBAndWIcon />}
									title='Generic filters'
									// action={
									// 	<FormGroup row>
									// 		<FormControlLabel
									// 			control={
									// 				<Switch
									// 					color='primary'
									// 					checked={saveSearch}
									// 					onChange={() =>
									// 						setSaveSearch(
									// 							!saveSearch
									// 						)
									// 					}
									// 					name='save_search'
									// 				/>
									// 			}
									// 			label={
									// 				<span
									// 					style={{
									// 						fontSize: "0.75rem",
									// 					}}>
									// 					Save this search
									// 				</span>
									// 			}
									// 		/>
									// 	</FormGroup>
									// }
								/>
								<CardContent>
									<Grid container spacing={2}>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>
														Age Range
													</Typography>
													<Typography
														className={
															classes.ageValueStyle
														}>
														{ageValue[0].toString() +
															" to " +
															ageValue[1].toString()}
													</Typography>
													<Slider
														value={ageValue}
														min={18}
														max={60}
														onChange={
															handleAgeChange
														}
														valueLabelDisplay='auto'
														aria-labelledby='range-slider'
													/>
												</CardContent>
											</Card>
										</Grid>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>
														Home town
													</Typography>
													<div>
														<Autocomplete
															multiple
															limitTags={2}
															id='tags-outlined'
															options={names}
															getOptionLabel={(
																option
															) => option}
															filterSelectedOptions
															renderInput={(
																params
															) => (
																<TextField
																	margin='dense'
																	{...params}
																	variant='outlined'
																	placeholder='Select multiple cities'
																/>
															)}
														/>
													</div>
												</CardContent>
											</Card>
										</Grid>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>
														Height
													</Typography>
													<Typography
														className={
															classes.ageValueStyle
														}>
														{convHgtVal[0].toString() +
															" to " +
															convHgtVal[1].toString()}
													</Typography>
													<Slider
														value={heightValue}
														min={123}
														max={215}
														onChange={
															handleHeightChange
														}
														valueLabelDisplay='auto'
														aria-labelledby='range-slider'
													/>
												</CardContent>
											</Card>
										</Grid>
										<Grid item md={6} xs={12}>
											<Card
												className={classes.searchCards}>
												<CardContent>
													<Typography>
														Salary per month (in
														thousands)
													</Typography>
													<Typography
														className={
															classes.ageValueStyle
														}>
														{salValue[0].toString() +
															"K to " +
															salValue[1].toString() +
															"K"}
													</Typography>
													<Slider
														value={salValue}
														min={0}
														max={500}
														onChange={
															handleSalChange
														}
														valueLabelDisplay='auto'
														aria-labelledby='range-slider'
													/>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</DialogContent>
				<Divider />
				<DialogActions>
					<Button onClick={handleClose} color='secondary'>
						Cancel
					</Button>
					<Button onClick={handleSubmit} color='primary'>
						Filter
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

SearchDialog.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchDialog);
