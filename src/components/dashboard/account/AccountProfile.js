import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../../../firebase/firebase";
import {
	Card,
	CardActions,
	CardContent,
	Divider,
	Button,
	withStyles,
	CardActionArea,
	CardMedia,
	Typography,
	CircularProgress,
	LinearProgress,
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
		width: "70%",
		margin: "auto",
		height: "80%",
	},
	loader: {
		marginLeft: "5px",
		marginTop: "4px",
		position: "absolute",
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
	const { classes, values } = props;
	var [imagesList, setImagesList] = useState(
		values.images && values.images.length >= 1 ? values.images : []
	);
	const [currImageIdx, setCurrImageIdx] = useState(0);
	const [loading, setLoading] = useState(false);
	const [imageRefresh, setImageRefresh] = useState(false);
	const [imageAsFile, setImageAsFile] = useState("");

	const handleImageAsFile = (e) => {
		const image = e.target.files[0];
		setImageAsFile((imageFile) => image);
	};

	const updateCurrImgIdx = (currIdx) => {
		setCurrImageIdx(currIdx);
	}

	useEffect(() => {
		handleFireBaseUpload();
	}, [imageAsFile]);

	const deleteImage = () => {
		imagesList.splice(currImageIdx, 1);
		setImageRefresh(true);
		values.images = imagesList;
		setImagesList(imagesList);
		props.onChange("delete_image", imagesList);
		console.log("inside delete image", currImageIdx);
	};

	const handleFireBaseUpload = () => {
		// async magic goes here...
		if (imageAsFile === "") {
			console.error("No Image Found");
		} else if (imageAsFile) {
			setLoading(true);
			const uploadTask = storage
				.ref(`/${values.uid}/${imageAsFile.name}`)
				.put(imageAsFile);

			//initiates the firebase side uploading
			uploadTask.on(
				"state_changed",
				(snapShot) => {
					//takes a snap shot of the process as it is happening
					console.log(snapShot);
				},
				(err) => {
					//catches the errors
					console.log(err);
				},
				() => {
					storage
						.ref(values.uid)
						.child(imageAsFile.name)
						.getDownloadURL()
						.then((fireBaseUrl) => {
							setImagesList([...imagesList, fireBaseUrl]);
							props.onChange("images", fireBaseUrl);
							setLoading(false);
						});
				}
			);
		}
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				{loading ? <LinearProgress /> : ""}
				{imagesList && imagesList.length >= 1 && !loading ? (
					<ImageCarousal loading={loading} imageList={imagesList} imageIndex={currImageIdx} updateImgIdx={updateCurrImgIdx} imageRefresh={imageRefresh}/>
				) : imagesList && imagesList.length >= 1 && loading ? (
					<ImageCarousal loading={loading} imageList={imagesList} imageIndex={currImageIdx} updateImgIdx={updateCurrImgIdx} imageRefresh={imageRefresh}/>
				) : (
					<Card
						style={{
							boxShadow: "none",
						}}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								component='img'
								alt='No Image Found'
								title='No Image Found'
								image={
									"https://firebasestorage.googleapis.com/v0/b/stage-vyvaha.appspot.com/o/public%2Fnodata.png?alt=media&token=5c8252d8-6e07-482f-a3bf-a22611ff5f4e"
								}
							/>
							<Typography
								variant='caption'
								color='textSecondary'
								variantMapping='subtitle1'>
								No image found. Upload best image of yours and
								horoscope to get more responses.
							</Typography>
						</CardActionArea>
					</Card>
				)}
			</CardContent>
			<Divider />
			<CardActions style={{ float: "left" }}>
				<form onSubmit={handleFireBaseUpload}>
					<input
						accept='image/*'
						className={classes.input}
						id='outlined-button-file'
						multiple
						onChange={handleImageAsFile}
						type='file'
					/>
					{loading ? (
						<CircularProgress
							className={classes.loader}
							size={24}
						/>
					) : (
						""
					)}
					<label htmlFor='outlined-button-file'>
						<Button
							variant='outlined'
							color='primary'
							component='span'
							size='small'
							type='submit'
							disabled={loading}
							startIcon={<CloudUploadIcon />}>
							Upload
						</Button>
					</label>
				</form>
			</CardActions>
			<CardActions style={{ float: "right" }}>
				<Button
					variant='outlined'
					size='small'
					color='secondary'
					onClick={deleteImage}
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
