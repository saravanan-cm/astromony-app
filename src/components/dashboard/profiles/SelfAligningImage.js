import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { GridListTileBar, withStyles, IconButton, Tooltip, Zoom } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { HomeRounded } from "@material-ui/icons";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import api from "../../../actions/makeAPICall";
import { withSnackbar } from "notistack";

const styles = {
	imageContainer: {
		width: "100%",
		paddingTop: "100%",
		overflow: "hidden",
		position: "relative",
		borderRadius: "4px",
	},
	image: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		cursor: "pointer",
		right: 0,
		margin: "auto",
	},
};

class SelfAligningImage extends PureComponent {
	state = { moreWidthThanHeight: null, loaded: false, fav: false };
	constructor(props) {
		super(props);
		this.setState({ ...this.state, fav: props.favorite });
	}
	componentWillReceiveProps(props) {
		this.setState({ ...this.state, fav: props.favorite });
	}

	openProfile = (id, page) => {
		console.log("entered openProfile--   ", id);
		var uid = btoa(id + "--" + page.toString());
		// window.location.href = "/profile?id=" + uid;
		window.open("/profile?id=" + uid, '_blank');
	};

	addFav = (fav_id, user) => {
		console.log("entered favAction--   ", fav_id, user);
		let req_data = {
			fav: [fav_id],
		};
		api.addFavProfile(req_data, user).then((resp) => {
			if (resp && resp["data"] && resp["data"]["status"]) {
				let variant = "success";
				this.props.enqueueSnackbar('Added to favorites', { variant });
				this.setState({ ...this.state, fav: true });
			}
		});
	};

	removeFav = (fav_id, user) => {
		console.log("entered favAction--   ", fav_id, user);
		let req_data = {
			fav: [fav_id],
		};
		this.setState({ ...this.state, fav: false });
		api.removeFavProfile(req_data, user).then((resp) => {
			if (resp && resp["data"] && resp["data"]["status"]) {
				this.props.enqueueSnackbar('Removed from favorites');
				this.setState({ ...this.state, fav: false });
			}
		});
	};

	render() {
		const { moreWidthThanHeight, loaded, fav } = this.state;
		const {
			classes,
			src,
			title,
			id,
			page,
			work,
			hometown,
			user_email,
			age,
			roundedBorder,
			theme,
		} = this.props;
		return (
			<div className={classes.imageContainer}>
				<img
					style={{
						height: moreWidthThanHeight ? "100%" : "auto",
						width: moreWidthThanHeight ? "auto" : "100%",
						display: loaded ? "block" : "none",
						borderRadius: roundedBorder
							? theme.shape.borderRadius
							: 0,
					}}
					ref={(node) => {
						this.img = node;
					}}
					className={classes.image}
					onClick={() => this.openProfile(id, page)}
					onLoad={() => {
						if (this.img.naturalHeight > this.img.naturalWidth) {
							this.setState({
								moreWidthThanHeight: false,
								loaded: true,
							});
						} else {
							this.setState({
								moreWidthThanHeight: true,
								loaded: true,
							});
						}
					}}
					src={src}
					alt=''
				/>
				{title && (
					<GridListTileBar
						title={title}
						subtitle={
							<div>
								<div style={{display:"flex"}}>
									<p style={{ margin: "2% 3% 2% 0%"}}>
										Age: {age}
									</p>
									{(work ? <p style={{ margin: "2% 3% 2% 0%"}}>
										{"| "+work}
									</p>: "")}
								</div>
								{(hometown ? <div style={{display:"flex"}}>
									<HomeRounded style={{fontSize:"1rem"}} />
									<p style={{margin: "1% 0% 0% 2%"}}>
										{hometown}
									</p>
								</div> : "")}
							</div>
						}
						actionIcon={
							<IconButton>
								{fav ? (
									<Tooltip title={'Shortlist'} placement="top" TransitionComponent={Zoom} followCursor>
									<StarIcon
										style={{ color: "ghostwhite" }}
										onClick={() =>
											this.removeFav(id, user_email)
										}
									/>
									</Tooltip>
								) : (
									<Tooltip title={'Shortlist'} placement="top" TransitionComponent={Zoom} followCursor>
									<StarBorderIcon
										style={{ color: "ghostwhite" }}
										onClick={() =>
											this.addFav(id, user_email)
										}
									/>
									</Tooltip>
								)}
							</IconButton>
						}
					/>
				)}
			</div>
		);
	}
}

SelfAligningImage.propTypes = {
	classes: PropTypes.object.isRequired,
	src: PropTypes.string.isRequired,
	theme: PropTypes.object.isRequired,
	title: PropTypes.string,
	timeStamp: PropTypes.number,
	roundedBorder: PropTypes.bool,
	options: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles, { withTheme: true })(withSnackbar(SelfAligningImage));
