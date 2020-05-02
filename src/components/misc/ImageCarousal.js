import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, withStyles } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import ZoomImage from "./ZoomImage";

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

const ImageCarousal = (props) => {
	const { classes, imageList } = props;
	const [values, setValues] = useState({
		moreWidthThanHeight: null,
		loaded: false,
	});

	const [image, setImage] = useState({
		src: imageList[0],
		index: 0,
	});

	const showNextImage = () => {
		var currIndex = image.index;
		var newSrc = image.src;
		if (imageList.length - 1 !== currIndex) {
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

	const showPreviousImage = () => {
		var currIndex = image.index;
		var newSrc = image.src;
		if (currIndex !== 0) {
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
		<div className={classes.details}>
			<IconButton
				aria-label='delete'
				style={{ backgroundColor: "transparent" }}
				onClick={() => showPreviousImage()}>
				<NavigateBeforeIcon />
			</IconButton>

			<div className={classes.imageContainer}>
				<ZoomImage
					style={{
						height: values.moreWidthThanHeight ? "100%" : "auto",
						width: values.moreWidthThanHeight ? "auto" : "100%",
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
			</div>
			<IconButton
				aria-label='delete'
				style={{ backgroundColor: "transparent" }}
				onClick={() => showNextImage()}>
				<NavigateNextIcon />
			</IconButton>
		</div>
	);
};

ImageCarousal.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCarousal);
