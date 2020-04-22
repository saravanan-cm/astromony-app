import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ZoomImage from "../../misc/ZoomImage";

const styles = (theme) => ({
	root: {},
	details: {
		display: "flex",
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
		// marginLeft: "10%",
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
});

const AccountProfile = (props) => {
	const { classes, className, ...rest } = props;
	const [values, setValues] = useState({
		moreWidthThanHeight: null,
		loaded: false,
	});

	const imageList = [
		"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
		"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
		"https://www.wallpaperflare.com/static/622/473/259/artwork-anime-landscape-painting-wallpaper.jpg",
	];

	const [image, setImage] = useState({
		src: imageList[0],
		index: 0,
	});

	const showNextImage = () => {
		var currIndex = image.index;
		var newSrc = image.src;
		if (imageList.length - 1 != currIndex) {
			newSrc = imageList[currIndex + 1];
			currIndex = currIndex + 1;
		} else {
			newSrc = imageList[0];
			currIndex = 0;
		}
		setImage({
			src: newSrc,
			index: currIndex,
		});
	};

	const download = () => {
		var file_type = image.src.substring(
			image.src.lastIndexOf(".") + 1,
			image.src.length
		);
		// var link = document.createElement('a');
		// link.href = image.src;
		// link.download = 'Download.'+file_type;
		// document.body.appendChild(link);
		// link.click();
		// document.body.removeChild(link);
	};

	const showPreviousImage = () => {
		var currIndex = image.index;
		var newSrc = image.src;
		if (currIndex != 0) {
			newSrc = imageList[currIndex - 1];
			currIndex = currIndex - 1;
		} else {
			newSrc = imageList[imageList.length - 1];
			currIndex = imageList.length - 1;
		}
		setImage({
			src: newSrc,
			index: currIndex,
		});
	};

	var img = {};

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardContent>
				{/* <IconButton onClick={() => download()}>
					<DeleteRoundedIcon />
				</IconButton> */}
				<div className={classes.details}>
					<IconButton
						aria-label='delete'
						style={{ backgroundColor: "transparent" }}
						onClick={() => showPreviousImage()}>
						<NavigateBeforeIcon />
					</IconButton>
					<div className={classes.imageContainer}>
						{/* <Link href={image.src} target='_blank'> */}
						<ZoomImage
							style={{
								height: values.moreWidthThanHeight
									? "100%"
									: "auto",
								width: values.moreWidthThanHeight
									? "auto"
									: "100%",
								display: values.loaded ? "block" : "none",
							}}
							ref={(node) => {
								img = node;
							}}
							className={classes.image}
							onLoad={() => {
								if (img.naturalHeight > img.naturalWidth) {
									setValues({
										moreWidthThanHeight: false,
										loaded: true,
									});
								} else {
									setValues({
										moreWidthThanHeight: true,
										loaded: true,
									});
								}
							}}
							src={image.src}
							alt=''
						/>
						{/* </Link> */}
					</div>
					<IconButton
						aria-label='delete'
						style={{ backgroundColor: "transparent" }}
						onClick={() => showNextImage()}>
						<NavigateNextIcon />
					</IconButton>
				</div>
				<div className={classes.progress}>
					<Typography variant='body1'>
						Profile Completeness: 70%
					</Typography>
					<LinearProgress value={70} variant='determinate' />
				</div>
			</CardContent>
			<Divider />
			{/* <CardActions>
				<Button
					className={classes.uploadButton}
					color='primary'
					variant='text'>
					Upload picture
				</Button> 
				<IconButton onClick={() => download()}>
					<DeleteRoundedIcon />
				</IconButton>
			</CardActions> */}
		</Card>
	);
};

AccountProfile.propTypes = {
	className: PropTypes.string,
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountProfile);
