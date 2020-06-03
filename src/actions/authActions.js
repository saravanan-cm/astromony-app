import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// const base_url = "http://192.168.1.6:5000";
const base_url = "https://stage-vyvaha-api.herokuapp.com";
// Register User
export const registerUser = (userData, history) => (dispatch) => {
	axios
		.post(base_url + "/api/users/register", userData)
		.then((res) => history.push("/verify?email=" + userData.email)) // re-direct to login on successful register
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};
// Login - get user token
export const loginUser = (userData) => (dispatch) => {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};
	axios
		.post(base_url + "/api/users/login", userData, config)
		.then((res) => {
			// Save to localStorage
			// Set token to localStorage
			const { token } = res.data;
			localStorage.setItem("jwtToken", token);
			// Set token to Auth header
			setAuthToken(token);
			// Decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err && err.response ? err.response.data : {},
			})
		);
};
// Set logged in user
export const setCurrentUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};
// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING,
	};
};
// Log user out
export const logoutUser = () => (dispatch) => {
	// Remove token from local storage
	localStorage.removeItem("jwtToken");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

// Login - get user token
export const forgetPassword = (userData) => (dispatch) => {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};
	axios
		.post(base_url + "/api/users/forget-password", userData, config)
		.then((res) => {
			dispatch(setCurrentUser(res));
		})
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Login - get user token
export const verifyMobileNumber = (userData, history) => (dispatch) => {
	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};
	axios
		.post(base_url + "/api/users/verify", userData, config)
		.then((res) => {
			if (res && "status" in res) {
				if (res.status) {
					// history.push("/login");
					dispatch({
						type: USER_LOADING,
						payload: res,
					});
				} else {
					dispatch({
						type: GET_ERRORS,
						payload: {
							msg: res.message,
						},
					});
				}
			}
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			});
		});
};
