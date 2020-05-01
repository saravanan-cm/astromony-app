import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import { GridListTileBar, withStyles, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const styles = {
	imageContainer: {
		width: "100%",
		paddingTop: "100%",
		overflow: "hidden",
		position: "relative",
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
	state = { moreWidthThanHeight: null, loaded: false };

	openProfile = (id) => {
		console.log("entered openProfile--   ", id);
		window.location.href = "/user?id=" + id;
	};

	render() {
		const { moreWidthThanHeight, loaded } = this.state;
		const {
			classes,
			src,
			title,
			id,
			timeStamp,
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
					onClick={() => this.openProfile(id)}
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
						subtitle={format(
							new Date(timeStamp * 1000),
							"PP - k:mm",
							{
								awareOfUnicodeTokens: true,
							}
						)}
						actionIcon={
							<IconButton>
								<StarBorderIcon style={{ color: "white" }} />
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

export default withStyles(styles, { withTheme: true })(SelfAligningImage);
