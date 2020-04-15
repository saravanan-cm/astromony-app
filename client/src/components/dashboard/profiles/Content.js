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
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Kamal",
		timestamp: new Date().getTime() / 1000,
	},
	{
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Vijay",
		timestamp: new Date().getTime() / 1000,
	},
	{
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Dhanush",
		timestamp: new Date().getTime() / 1000,
	},
	{
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Rajini",
		timestamp: new Date().getTime() / 1000,
	},
	{
		src:
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		name: "Surya",
		timestamp: new Date().getTime() / 1000,
	},
	{
		src:
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		name: "Ajith",
		timestamp: new Date().getTime() / 1000,
	},
];

class Content extends PureComponent {
	state = {
		page: 0,
	};

	rowsPerPage = 5;

	handleChangePage = (__, page) => {
		this.setState({ page });
	};

	printImageGrid = () => {
		const options = [];
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
										timeStamp={element.timestamp}
										options={options}
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
					No posts added yet. Click on &quot;NEW&quot; to create your
					first one.
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

Content.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
