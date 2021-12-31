import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Typography from "@material-ui/core/Typography";
import { Container, Card, CardContent } from "@material-ui/core";
import Navbar from "../../components/layout/Navbar";

class PrivacyPolicy extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {},
			showLoader: "none",
			showLogin: "yes",
			showMenu: "none",
		};
	}
	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/user/home");
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.setState({ showLoader: "none" });
			this.props.history.push("/user/home"); // push user to dashboard when they login
		}
		if (nextProps.errors) {
			this.setState({ showLoader: "none" });
			this.setState({
				errors: nextProps.errors,
			});
		}
	}
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.email && this.state.password) {
			this.setState({ showLoader: "" });
		}
		const userData = {
			email: this.state.email,
			password: this.state.password,
		};
		this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};
	render() {
		const { errors } = this.state;
		return (
			<div className='container' style={{
				height: "100%",
				paddingBottom: "3%",
				maxWidth: "inherit",
				position: "relative",
				// backgroundSize: "100%",
				// backgroundPosition: "100%",
				backgroundImage: "linear-gradient(#f3f3f3, rgb(255, 251, 255), rgb(229 213 213))",
				backgroundRepeat: "no-repeat",
			}}>
				<Navbar customProps={this.state} />
				<div
					style={{
						marginTop: "3%"
					}}
					className='row'>
					<Container maxWidth='lg'>
						<Card>
							<CardContent>
								<div style={{ padding: "2%" }}>
									<Typography align="center" variant="h4" style={{ color: "#c9293c", marginBottom: "2%" }} component="div">
										Privacy Policy</Typography>
									<div style={{ marginBottom: "2%" }}>
										<Typography variant="body2" style={{ color: "grey" }}>
											Vyvaha.com is an online matrimonial portal endeavouring constantly to provide you with matrimonial services. This privacy statement is common to all the matrimonial Website/apps operated under Vyvaha.com Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you. You acknowledge that you are disclosing information voluntarily. By accessing /using the website/apps and/or by providing your information, you consent to the collection, use, share, store and process the info you disclose on the website/apps in accordance with this Privacy Policy. If you do not agree for use of your information, please do not use or access this website/apps.
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											What information you need to give in to use this Website/apps?</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												The information we gather from members and visitors who apply for the various services our website/apps offers includes, but may not be limited to, email address, name, date of birth, identification proofs / address proofs, educational qualifications a user-specified password, mailing address, zip/pin code and telephone/mobile number or fax number.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												We use a secure server for credit card transactions to protect the credit card information of our users and Cookies are used to store the login information. Cookies are small files placed on your hard drive that will assist us in providing our services. You may also encounter Cookies or identical/related devices on certain pages of the website/apps that are placed by third parties. We do not control the use of cookies by third parties.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												If you establish a credit account with us to pay the fees we charge, some additional information, including a billing address, a credit/debit card number and a credit/debit card expiration date and tracking information from cheques or demand drafts is collected.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												The user information we collect depends on the context of your interactions with us and the website or Apps, the choices you make and the products and features you use. The User Information is used for authentication and account access, If a user registers using social networking platforms such as Facebook, Google, LinkedIn and others we may collect personal data you choose to allow us to access through their APIs. When the user accesses our websites or apps, data relating to device ID, log files ,Geographic Location, device Information/specification are also collected automatically.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												We may use also your personal information for verification, analysis of data, usage trends and to evaluate and improve our site/App, marketing research , preventing of frauds. In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our website/apps. We identify and use your IP address to help diagnose problems with our server, and to administer our website/apps. Your IP address is also used to help identify you and to gather broad demographic information.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											How the website/apps uses the information it collects/tracks?</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												Vyvaha.com collects information for data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our websites or apps, products, and services ,marketing research from our users primarily to ensure that we are able to fulfil your requirements and to deliver Personalised experience.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											For European Union Members (EU)</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												If you are located in the EU, you will be asked to provide consent to the collection, processing, and sharing of your personal information. Personal information means any information related to an identified or identifiable natural person. You have the right to share and access your personal information and right to withdraw consent for sharing your personal information at any point of time and right to erase your personal information subject to applicable laws. for sharing your personal information at any point of time. You can withdraw your consent provided by contacting us. Your personal information may be stored in databases located outside of the EU including in India. Where we transfer personal data outside of EU, we either transfer personal information to countries that provide an adequate level of protection or we have appropriate safeguards in place. We may require proof of or need to verify your identity before we can give effect to these rights. To request to review, update, or delete your personal information, please submit a request form by sending an email to support@vyvaha.com. We may share your information with third parties who are an anti-fraud solution provider(s) located in UK. They help us to ensure we keep you safe from scammers and fraudster.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											With whom the website/apps shares the information it collects/tracks?</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												We may share such identifiable information with our associates/affiliates/subsidiaries and such associates/affiliates/subsidiaries may market to you as a result of such sharing. Any information you give us is held with the utmost care and security. We are also bound to cooperate fully should a situation arise where we are required by law or legal process to provide information about a customer/visitor.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												Where required or permitted by law, information may be provided to others, such as regulators and law enforcement agencies or to protect the rights, property or personal safety of other members or the general public. We may voluntarily share your information with law enforcement agencies / Gateway service providers / anti-fraud solution provider(s) if we feel that the transaction is of suspicious nature.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												From time to time, we may consider corporate transactions such as a merger, acquisition, reorganization, asset sale, or similar. In these instances, we may transfer or allow access to information to enable the assessment and undertaking of that transaction. If we buy or sell any business or assets, personal information may be transferred to third parties involved in the transaction.
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												Our website/apps links to other website/apps that may collect personally identifiable information about you. We are not responsible for the privacy policy or the contents of those linked website/apps.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											How Long Do We Keep Your Information?</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												As stipulated in the Privacy Policy we will retain the information we collect from users under the following circumstances:
											</p>
											<br></br>
											<p style={{ marginBottom: "0.05%" }}>
												For as long as the users subscribe to our services to meet their suitable purpose(s) for which it was collected, for the sake of enforcing agreements, for performing audits, for resolving any form of disputes, for establishing legal defences, for pursuing legitimate businesses and to comply with the relevant applicable laws.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											What are the Security Precautions in respect of your personal information?</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal control measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Once your information is in our possession, we adhere to security guidelines protecting it against unauthorised access.
											</p>
										</Typography>
									</div>
									<br></br>
									<div>
										<Typography align="left" variant="h5" style={{ color: "#c9293c", marginBottom: "1%" }} component="div">
											Change of Privacy Policy</Typography>
										<Typography variant="body2" style={{ color: "grey" }}>
											<p style={{ marginBottom: "0.05%" }}>
												We may change this Privacy Policy from time to time without any notice to you. However, changes will be updated in the Privacy Policy page.</p>
										</Typography>
									</div>
								</div>
							</CardContent>
						</Card>
					</Container>
				</div>
			</div>
		);
	}
}
PrivacyPolicy.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(PrivacyPolicy);