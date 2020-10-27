// Thuc hanh call data tu service
// Import thu vien axios
const axios = require('axios');
const { get } = require('https');
const getDataWeatherFromApi = async(cityName = 'Tokyo') => {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric&lang=vi&fbclid=IwAR0EZFbi1sjaykh0HPxbkTPy9Bc0NcZ1RbIAp6YqLNTs3CaCHse5OBAJr1w`
    const response = await axios.get(urlApi);
    const data = await response.status === 200 ? response.data:[];
    return data;
}

const showData = async () => {
    const data = await getDataWeatherFromApi('Hanoi');
    console.log(data);
}

const showDataV2 = () => {
    getDataWeatherFromApi('Hanoi').then(data => console.log(data))
                                .catch(error => console.log(error));
}

showData();
// showDataV2();
