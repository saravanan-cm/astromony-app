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
import SearchDialog from "./SearchDialog";
import api from "../../../actions/makeAPICall";
import Skeleton from "@material-ui/lab/Skeleton";

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
});

// class ProfileContent extends PureComponent {
const ProfileContent = (props) => {
	var [state, setState] = useState({
		page: 0,
	});
	const { classes, profiles, userDetails } = props;
	var [posts, setPosts] = useState(profiles);
	const { page } = state;

	var rowsPerPage = 8;

	const handleChangePage = (__, page) => {
		console.log("page no--   ", page);
		setState({ page });
	};

	useEffect(() => {
		getData();
	});

	async function getData() {
		let response = {};
		if (profiles && profiles.length) {
			setPosts(profiles);
		} else {
			response = await api.getProfilesList(userDetails.email);
			// response = await api.getMyData("saracmmce@gmail.com");
		}
		console.log(response);
		if ("status" in response) {
			let resData = response.data.data;
			setPosts(resData);
			props.onChange("profiles", resData);
		}
	}

	const printImageGrid = () => {
		const { page } = state;
		return (
			<div className={classes.root}>
				{posts && posts.length ? (
					<div>
						<Box p={1}>
							<Grid container spacing={1}>
								{posts
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
												page={page}
												age={element.dob}
												work={element.work}
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
				<Typography variant='h6'>Profiles</Typography>
				<SearchDialog />
			</Toolbar>
			<Divider />
			{printImageGrid()}
			<TablePagination
				component='div'
				count={posts.length}
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
					actions: posts.length > 0 ? classes.dBlock : classes.dNone,
					caption: posts.length > 0 ? classes.dBlock : classes.dNone,
				}}
				labelRowsPerPage=''
			/>
		</Paper>
	);
};

ProfileContent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileContent);
