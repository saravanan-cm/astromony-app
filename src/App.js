import React, { Component, Suspense, Fragment, lazy } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Verify from "./components/auth/Verify";
import ForgetPassword from "./components/auth/ForgetPassword";
import PrivateRoute from "./components/private-route/PrivateRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dashboard from "./components/dashboard/Dashboard";
import ProfileContent from "./components/dashboard/profiles/Content";
import ShortlistedContent from "./components/dashboard/shortlisted/Content";
import Home from "./components/dashboard/account/Landing";
import User from "./components/user/User";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "./login";
	}
}
const Landing = lazy(() => import("./components/layout/Landing"));
class App extends Component {
	constructor() {
		super();
		this.state = {
			logged_in: false,
		};
	}
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Suspense
							fallback={<CircularProgress color='secondary' />}>
							<Route exact path='/' component={Landing} />
							<Route
								exact
								path='/register'
								component={Register}
							/>
							<Route exact path='/login' component={Login} />
							<Route
								exact
								path='/verify'
								component={Verify}
							/>
							<Route
								exact
								path='/forget-password'
								component={ForgetPassword}
							/>
							<Switch>
								<Route
									path='/user'
									render={({ match: { url } }) => (
										<>
											<PrivateRoute
												path={`${url}/:tab`}
												component={Home}
												history={useHistory}
												exact
											/>
										</>
									)}
								/>
								{/* <PrivateRoute
									path='/dashboard/:tab'
									history={useHistory}
									component={Dashboard}
								/> */}
								<PrivateRoute
									exact
									path='/profile'
									component={User}
								/>
							</Switch>
						</Suspense>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
