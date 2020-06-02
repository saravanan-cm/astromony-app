import React, { PureComponent } from "react";
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
import HighlightedInformation from "./HighlightedInformation";

const styles = {
	dBlock: { display: "block" },
	dNone: { display: "none" },
	toolbar: {
		justifyContent: "space-between",
	},
};

const posts = [
	{
		uid: "FG467EDDA",
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Kamal",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG87DFC3D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Vijay",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG4DF4GHD",
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Dhanush",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG4Q2EF3D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Rajini",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46ZG53D",
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Surya",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46FG53D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46FG53D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46FG53D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46FG53D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
	{
		uid: "FG46FG53D",
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
];

class ProfileContent extends PureComponent {
	state = {
		page: 0,
	};

	rowsPerPage = 8;

	handleChangePage = (__, page) => {
		console.log("page no--   ", page);
		this.setState({ page });
	};

	printImageGrid = () => {
		const { page } = this.state;
		if (posts.length > 0) {
			return (
				<Box p={1}>
					<Grid container spacing={1}>
						{posts
							.slice(
								page * this.rowsPerPage,
								page * this.rowsPerPage + this.rowsPerPage
							)
							.map((element) => (
								<Grid
									item
									xs={6}
									sm={4}
									md={3}
									key={element.id}>
									<SelfAligningImage
										src={element.src}
										title={element.name}
										id={element.uid}
										page={page}
										timeStamp={element.timestamp}
									/>
								</Grid>
							))}
					</Grid>
				</Box>
			);
		}
		return (
			<Box m={2}>
				<HighlightedInformation>
					No profiles found for you !!!
				</HighlightedInformation>
			</Box>
		);
	};

	render() {
		const { page } = this.state;
		const { classes } = this.props;
		return (
			<Paper>
				<Toolbar className={classes.toolbar}>
					<Typography variant='h6'>Profiles</Typography>
					<SearchDialog />
				</Toolbar>
				<Divider />
				{this.printImageGrid()}
				<TablePagination
					component='div'
					count={posts.length}
					rowsPerPage={this.rowsPerPage}
					page={page}
					backIconButtonProps={{
						"aria-label": "Previous Page",
					}}
					nextIconButtonProps={{
						"aria-label": "Next Page",
					}}
					onChangePage={this.handleChangePage}
					classes={{
						select: classes.dNone,
						selectIcon: classes.dNone,
						actions:
							posts.length > 0 ? classes.dBlock : classes.dNone,
						caption:
							posts.length > 0 ? classes.dBlock : classes.dNone,
					}}
					labelRowsPerPage=''
				/>
			</Paper>
		);
	}
}

ProfileContent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileContent);
