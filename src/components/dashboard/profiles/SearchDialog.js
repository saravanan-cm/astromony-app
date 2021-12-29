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
	Input,
	FormGroup,
	FormControlLabel,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterBAndWIcon from "@material-ui/icons/FilterBAndW";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FilterListIcon from "@material-ui/icons/FilterList";
import {
	statusList,
	eatingHabits,
} from "../../../assets/dumps/basicLists";

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
	const { classes, onChange, ht } = props;
	const [uid, setUid] = React.useState(null);
	const [name, setNameVal] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [ageValue, setAgeValue] = React.useState([18, 60]);
	const [salValue, setSalValue] = React.useState([100, 5000]);
	const [heightValue, setHeightValue] = React.useState([123, 215]);
	const [convHgtVal, setConvHgtVal] = React.useState(["4ft 0in", "7ft 1in"]);
	const [saveSearch, setSaveSearch] = React.useState(false);
	const [homeTown, setHomeTown] = React.useState([]);
	const [maritalStatus, setMaritalStatus] = React.useState([]);
	const [eating, setEating] = React.useState([]);

	const handleHomeTown = (event, newValue) => {
		setHomeTown(newValue);
	};

	const handleMaritalStatus = (event, newValue) => {
		setMaritalStatus(newValue);
	};

	const handleEating = (event, newValue) => {
		setEating(newValue);
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
			homeTown: homeTown,
			maritalStatus: maritalStatus,
			eating: eating,
		};
		onChange(ftr);
	};

	const handleAgeChange = (event, newValue) => {
		setAgeValue(newValue);
	};

	const handleSalChange = (event, newValue) => {
		setSalValue(newValue);
	};

	const handleSalFromChange = (event) => {
		let newValue = [event.target.value, salValue[1]];
		setSalValue(newValue);
	};

	const handleSalToChange = (event) => {
		let newValue = [salValue[0], event.target.value];
		setSalValue(newValue);
	};

	const handleAgeFromChange = (event) => {
		let newValue = [event.target.value, ageValue[1]];
		setAgeValue(newValue);
	};

	const handleAgeToChange = (event) => {
		let newValue = [ageValue[0], event.target.value];
		setAgeValue(newValue);
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

	const handleHeightFromChange = (event) => {
		let newValue = [event.target.value, heightValue[1]];
		setHeightValue(newValue);
		setConvHgtVal([toFeet(newValue[0]), toFeet(newValue[1])]);
	};

	const handleHeightToChange = (event) => {
		let newValue = [heightValue[0], event.target.value];
		setHeightValue(newValue);
		setConvHgtVal([toFeet(newValue[0]), toFeet(newValue[1])]);
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
				style={{height:"92%"}}
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
														value={uid}
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
														value={name}
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
													<Grid container spacing={5}>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 0% 4% 7%" }}>
															<TextField
																fullWidth
																value={ageValue[0]}
																onChange={handleAgeFromChange}
																label=""
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 1,
																	min: 18,
																	max: 60
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ textAlign: "center", verticalAlign: "middle", lineHeight: "2.5" }}>
															{" to "}
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 6% 4% 0%" }}>
															<TextField
																fullWidth
																style={{ position: "relative", textAlign: "right" }}
																value={ageValue[1]}
																onChange={handleAgeToChange}
																label=""
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 1,
																	min: 18,
																	max: 60
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
													</Grid>
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
															onChange={handleHomeTown}
															multiple
															limitTags={2}
															id='tags-outlined'
															options={ht}
															getOptionLabel={(
																option
															) => option}
															filterSelectedOptions
															renderInput={(
																params
															) => (
																<TextField
																	onChange={handleHomeTown}
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
														Marital status
													</Typography>
													<div>
														<Autocomplete
															onChange={handleMaritalStatus}
															multiple
															limitTags={2}
															id='tags-outlined'
															options={statusList}
															getOptionLabel={(
																option
															) => option}
															filterSelectedOptions
															renderInput={(
																params
															) => (
																<TextField
																	onChange={handleMaritalStatus}
																	margin='dense'
																	{...params}
																	variant='outlined'
																	placeholder='Select marital status'
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
														Eating Habits
													</Typography>
													<div>
														<Autocomplete
															onChange={handleEating}
															multiple
															limitTags={2}
															id='tags-outlined'
															options={eatingHabits}
															getOptionLabel={(
																option
															) => option}
															filterSelectedOptions
															renderInput={(
																params
															) => (
																<TextField
																	onChange={handleEating}
																	margin='dense'
																	{...params}
																	variant='outlined'
																	placeholder='Select eating habits'
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
													<Grid container spacing={5}>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 0% 4% 7%" }}>
															<TextField
																fullWidth
																value={heightValue[0]}
																onChange={handleHeightFromChange}
																label="in cm"
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 30,
																	min: 123,
																	max: 215
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ textAlign: "center", verticalAlign: "middle", lineHeight: "2.5" }}>
															{" to "}
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 6% 4% 0%" }}>
															<TextField
																fullWidth
																style={{ position: "relative", textAlign: "right" }}
																value={heightValue[1]}
																onChange={handleHeightToChange}
																label="in cm"
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 30,
																	min: 123,
																	max: 215
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
													</Grid>
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
															" K to " +
															salValue[1].toString() + " K"}
													</Typography>
													<Slider
														value={salValue}
														min={0}
														max={10000}
														onChange={
															handleSalChange
														}
														valueLabelDisplay='auto'
														aria-labelledby='range-slider'
													/>
													<Grid container spacing={5}>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 0% 4% 7%" }}>
															<TextField
																fullWidth
																value={salValue[0]}
																onChange={handleSalFromChange}
																label=""
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 100,
																	min: 0,
																	max: 10000
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ textAlign: "center", verticalAlign: "middle", lineHeight: "2.5" }}>
															{" to "}
														</Grid>
														<Grid item xl={4} lg={4} md={4} sm={4} xs={4}
															style={{ padding: "4% 6% 4% 0%" }}>
															<TextField
																fullWidth
																style={{ position: "relative", textAlign: "right" }}
																value={salValue[1]}
																onChange={handleSalToChange}
																label=""
																margin="dense"
																type="number"
																variant="outlined"
																inputProps={{
																	step: 100,
																	min: 0,
																	max: 10000
																}}
																InputLabelProps={{
																	shrink: true,
																}}
															/>
														</Grid>
													</Grid>
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
