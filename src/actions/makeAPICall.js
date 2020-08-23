import axios from "axios";

// const base_url = "http://localhost:5000";
const base_url = "https://stage-vyvaha-api.herokuapp.com";

async function getMyData(email) {
	let resp = {
		status: false,
		data: {},
	};
	let config = {
		method: "get",
		url: base_url + "/api/profile",
		headers: {
			"Access-Control-Allow-Origin": "*",
			email: email,
		},
	};
	let res = await axios(config);
	if (res && "status" in res) {
		if (res.status) {
			resp.status = true;
			resp.data = res.data;
			return resp;
		} else {
			resp.data = res.data;
			return resp;
		}
	}
}

async function getProfilesList(email) {
	let resp = {
		status: false,
		data: {},
	};
	let config = {
		method: "get",
		url: base_url + "/api/profile/list",
		headers: {
			"Access-Control-Allow-Origin": "*",
			email: email,
		},
	};
	let res = await axios(config);
	console.log("res----------          ",res);
	if (res && "status" in res) {
		if (res.status) {
			resp.status = true;
			resp.data = res.data;
			return resp;
		} else {
			resp.data = res.data;
			return resp;
		}
	}
}

async function updateMyData(data) {
	let resp = {
		status: false,
		data: {},
	};

	let config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	};
	let res = await axios.post(base_url + "/api/profile/update", data, config);
	if (res && "status" in res) {
		if (res.status) {
			resp.status = true;
			resp.data = res.data;
			return resp;
		} else {
			resp.data = res.data;
			return resp;
		}
	}
}

export default {
	getMyData: getMyData,
	updateMyData: updateMyData,
	getProfilesList: getProfilesList,
};
