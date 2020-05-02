import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Card,
	CardActions,
	CardContent,
	Typography,
	Divider,
	Button,
	IconButton,
	Link,
	LinearProgress,
	withStyles,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImageCarousal from "../../misc/ImageCarousal";

const styles = (theme) => ({
	root: {},
	details: {
		display: "flex",
	},
	input: {
		display: "none",
	},
	avatar: {
		marginLeft: "auto",
		height: 110,
		width: 100,
		flexShrink: 0,
		flexGrow: 0,
	},
	progress: {
		marginTop: theme.spacing(2),
	},
	uploadButton: {
		marginRight: theme.spacing(2),
	},
	media: {
		height: 140,
	},
	imageContainer: {
		width: "80%",
		paddingTop: "80%",
		overflow: "hidden",
		position: "relative",
	},
	image: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		margin: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		transform: "scale(-50%, -50%)",
	},
	imgflex: {
		flexDirection: "row",
		padding: 0,
	},
});

const AccountProfile = (props) => {
	const { classes } = props;

	const state = {
		images: [],
	};

	const imageList = [
		"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		"https://www.wallpaperflare.com/static/622/473/259/artwork-anime-landscape-painting-wallpaper.jpg",
	];

	const handleCapture = ({ target }) => {
		console.log("inside handleCapture---  ");
		const fileReader = new FileReader();
		const name = target.accept.includes("image") ? "images" : "videos";
		if (name === "images") {
			fileReader.readAsDataURL(target.files[0]);
			fileReader.onload = (e) => {
				state.images.push(e.target.result);
			};
		}
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<ImageCarousal imageList={imageList} />
				{/* <div className={classes.progress}>
					<Typography variant='body1'>
						Profile Completeness: 70%
					</Typography>
					<LinearProgress value={70} variant='determinate' />
				</div> */}
			</CardContent>
			<Divider />
			<CardActions style={{ float: "left" }}>
				<input
					accept='image/*'
					className={classes.input}
					id='outlined-button-file'
					multiple
					onChange={handleCapture}
					type='file'
				/>
				<label htmlFor='outlined-button-file'>
					<Button
						variant='outlined'
						color='primary'
						component='span'
						size='small'
						startIcon={<CloudUploadIcon />}>
						Upload
					</Button>
				</label>
			</CardActions>
			<CardActions style={{ float: "right" }}>
				<Button
					variant='outlined'
					size='small'
					color='secondary'
					startIcon={<DeleteIcon />}>
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

AccountProfile.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountProfile);
