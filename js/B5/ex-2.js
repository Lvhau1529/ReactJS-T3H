const axios = require("axios");

function* getDataCoronaVirus() {
	const urlApi = `https://api.covid19api.com/summary?fbclid=IwAR0EZFbi1sjaykh0HPxbkTPy9Bc0NcZ1RbIAp6YqLNTs3CaCHse5OBAJr1w`;
	const response = yield axios.get(urlApi);
	return response;
}

let result = getDataCoronaVirus();
result.next().value.then((res) => {
	console.log(res.data);
});