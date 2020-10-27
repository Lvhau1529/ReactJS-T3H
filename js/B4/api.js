// thuc hanh call data tu api server
// import thu vien node-fetch
const fetch = require('node-fetch');
// viet ham call data tu api
const getDataCoronaFromApi = async () => {
    const urlApi = `https://api.covid19api.com/summary?fbclid=IwAR0EZFbi1sjaykh0HPxbkTPy9Bc0NcZ1RbIAp6YqLNTs3CaCHse5OBAJr1w`;
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}
const showData = () => {
    getDataCoronaFromApi().then(data => console.log(data))
                          .catch(error => console.log(error));
}
showData();