import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	withStyles,
	Divider,
	Grid,
	IconButton,
	Card,
	CardHeader,
	CardContent,
} from "@material-ui/core";
import { logoutUser } from "../../actions/authActions";
import classNames from "classnames";
import Navbar from "../../components/layout/Navbar";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import UserTitle from "./UserTitle";
import ImageCarousal from "../misc/ImageCarousal";
import CollapsedBirthDetails from "./CollapsedBirthDetails";
import CollapsedFamilyDetails from "./CollapsedFamilyDetails";
import CollapsedWorkDetails from "./CollapsedWorkDetails";
import CollapsedExpectations from "./CollapsedExpectations";

const styles = (theme) => ({
	wrapper: {
		margin: theme.spacing(2),
		width: "auto",
		[theme.breakpoints.up("xs")]: {
			width: "95%",
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: theme.spacing(4),
			marginBottom: theme.spacing(4),
		},
		[theme.breakpoints.up("sm")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "90%",
			marginLeft: "auto",
			marginRight: "auto",
		},
		[theme.breakpoints.up("md")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "82.5%",
			marginLeft: "auto",
			marginRight: "auto",
		},
		[theme.breakpoints.up("lg")]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			width: "80%",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	main: {
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
});

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			iconType: "back",
			active_tab: this.props.auth.user.name,
			showLoader: "none",
			showLogin: "none",
			liked: false,
		};
	}

	handleChange(name, value) {
		this.setState({ ...this.state, [name]: value });
	}

	render() {
		const userDetails = {
			uid: "FHFGU35DG",
			name: "Saravanan C M",
			age: 25,
			gender: "male",
			dob: "14th April, 1995",
			email: "saracmmce@gmail.com",
			phone: "8508238711",
			ht: "Madurai, Tamilnadu",
			wrk: "Senior Software Engineer",
			wrkLoc: "Bangalore, Karnataka",
			salary: "70,000 Rs, Per Month",
			company: "Itilite Technologies",
			height: "5ft 11in",
			weight: "69 Kg",
			tone: "Medium",
			raasi: "Virgo",
			nakshatra: "Hastam",
			lookingFor: "Bride",
			status: "Single",
			education: "B.E - ECE",
			hobby: "Pencil Sketch",
			about:
				"I'm a well obedient person from a good family. Even though we are not rich in money, our parents brought me up with rich in character. \nAlways care about family and will do anything for it",
			expectations:
				"Looking for a supportive person, who can stand up with me in all situations. She has to be active and should respect elders. She needs to superpower to handle the family issues smoothly.",
			visaStatus: "Indian Resident",
			address: "No 2/1, Royar Thoppu, Sriramapuram, Srirangam.",
			familyName: "Chinnakonda",
			fatherName: "Mahesh babu C D",
			fatherOcc: "Business",
			famStatus: "Upper middle class",
			motherName: "Santhi C M",
			motherOcc: "Housewife",
			gothram: "Jabali",
			sisters: 3,
			marriedSisters: 1,
			brothers: 1,
			marriedBrothers: 1,
		};

		const imageList = [
			"https://www.pngitem.com/pimgs/m/4-42408_vector-art-design-men-fashion-vector-art-illustration.png",
			"https://previews.123rf.com/images/dafnadar/dafnadar1707/dafnadar170700015/82894770-handsome-young-adult-men-in-shirt-and-trousers-hand-drawing-illustration-with-black-line-art-man-wit.jpg",
			"https://www.wallpaperflare.com/static/622/473/259/artwork-anime-landscape-painting-wallpaper.jpg",
		];

		const { classes } = this.props;
		return (
			<div style={{ backgroundColor: "#f2f3f8" }}>
				<Navbar customProps={this.state} />
				<main className={classNames(classes.main)}>
					<div className={classes.wrapper}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Card>
									<CardContent>
										<Grid container spacing={4}>
											<Grid
												item
												lg={6}
												md={6}
												xl={6}
												xs={12}>
												<ImageCarousal
													imageList={imageList}
												/>
											</Grid>
											<Grid
												item
												lg={6}
												md={6}
												xl={6}
												xs={12}>
												<UserTitle
													values={userDetails}
												/>
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12}>
								<CollapsedBirthDetails values={userDetails} />
							</Grid>
							<Grid item xs={12}>
								<CollapsedFamilyDetails values={userDetails} />
							</Grid>
							<Grid item xs={12}>
								<CollapsedWorkDetails values={userDetails} />
							</Grid>
							<Grid item xs={12}>
								<CollapsedExpectations values={userDetails} />
							</Grid>
						</Grid>
					</div>
				</main>
			</div>
		);
	}
}
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(
	withStyles(styles, { withTheme: true })(Dashboard)
);
