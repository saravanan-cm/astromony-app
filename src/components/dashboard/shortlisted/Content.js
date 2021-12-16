import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
	Grid,
	TablePagination,
	Divider,
	Toolbar,
	Typography,
	Paper,
	Box,
	withStyles,
} from "@material-ui/core";
import SelfAligningImage from "./SelfAligningImage";
import SearchDialog from "../profiles/SearchDialog";
import api from "../../../actions/makeAPICall";
import Skeleton from "@material-ui/lab/Skeleton";
import NoData from "../../../assets/images/no_data.png";

const styles = (theme) => ({
	root: {},
	dBlock: { display: "block" },
	dNone: { display: "none" },
	toolbar: {
		justifyContent: "space-between",
	},
	profImg: {
		[theme.breakpoints.up("md")]: {
			marginTop: "3%",
			marginRight: "5%",
			width: "20%",
			height: 200,
		},
		[theme.breakpoints.down("md")]: {
			width: "90%",
			height: 200,
		},
	},
	noDataImg: {
		[theme.breakpoints.up("md")]: {
			margin: "0% 35%",
			width: "30%",
		},
		[theme.breakpoints.down("md")]: {
			width: "80%",
			margin: "0% 10%",
		},
	},
});

// class ShortlistedContent extends PureComponent {
const ShortlistedContent = (props) => {
	var [state, setState] = useState({
		page: 0,
	});
	const { classes, favorites, userDetails } = props;
	var [profiles, setProfiles] = useState(favorites);
	var [no_data, setNoData] = useState(false);
	const { page } = state;

	var rowsPerPage = 8;

	const handleChangePage = (__, page) => {
		console.log("page no--   ", page);
		setState({ page });
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		return () => {
			props.onChange("favorites", []);
		};
	}, []);

	async function getData() {
		let response = {};
		if (favorites == null) {
			setNoData(true);
		} else if (favorites && favorites.length) {
			setProfiles(favorites);
		} else {
			response = await api.getFavoritesList(userDetails.email);
			// response = await api.getMyData("saracmmce@gmail.com");
		}
		console.log(response);
		if ("status" in response) {
			let resData = response.data.data;
			if (resData && resData.length) {
				setProfiles(resData);
				props.onChange("favorites", resData);
			} else {
				setNoData(true);
			}
		}
	}

	const printImageGrid = () => {
		const { page } = state;
		return (
			<div className={classes.root}>
				{no_data && no_data === true ? (
					<div>
						<img
							className={classes.noDataImg}
							src={NoData}
							alt={"No Data Found...!"}
						/>
					</div>
				) : profiles && profiles.length ? (
					<div>
						<Box p={1}>
							<Grid container spacing={1}>
								{profiles
									.slice(
										page * rowsPerPage,
										page * rowsPerPage + rowsPerPage
									)
									.map((element) => (
										<Grid
											item
											xs={6}
											sm={4}
											md={3}
											key={element.id}>
											<SelfAligningImage
												src={element.image}
												title={element.name}
												id={element.uid}
												hometown={element.hometown}
												page={page}
												favorite={element.fav}
												age={element.dob}
												work={element.work}
												user_email={userDetails.email}
												workloc={element.workloc}
											/>
										</Grid>
									))}
							</Grid>
						</Box>
					</div>
				) : (
					<div style={{ marginLeft: "5%" }}>
						<div style={{ display: "flex" }}>
							<Skeleton
								variant='rect'
								className={classes.profImg}
							/>
							<Skeleton
								variant='rect'
								className={classes.profImg}
							/>
							<Skeleton
								variant='rect'
								className={classes.profImg}
							/>
							<Skeleton
								variant='rect'
								className={classes.profImg}
							/>
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<Paper>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h6'>Favorites</Typography>
				{/* <SearchDialog /> */}
			</Toolbar>
			<Divider />
			{printImageGrid()}
			<TablePagination
				component='div'
				count={profiles.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					"aria-label": "Previous Page",
				}}
				nextIconButtonProps={{
					"aria-label": "Next Page",
				}}
				onChangePage={handleChangePage}
				classes={{
					select: classes.dNone,
					selectIcon: classes.dNone,
					actions: profiles.length > 0 ? classes.dBlock : classes.dNone,
					caption: profiles.length > 0 ? classes.dBlock : classes.dNone,
				}}
				labelRowsPerPage=''
			/>
		</Paper>
	);
};

ShortlistedContent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShortlistedContent);
