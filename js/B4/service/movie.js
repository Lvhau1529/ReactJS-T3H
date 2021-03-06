const axios = require('axios');
const { get } = require('https');
const getDataMovieFromApi = async(movieName = 'Badman') => {
    const urlApi = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716&fbclid=IwAR2xCv4c6Hr8B0r7VM6fFWJR0-H7JRz4O1K4iTdduMHICdiCxXUKV2kiyzI`
    const response = await axios.get(urlApi);
    const data = await response.status === 200 ? response.data:[];
    return data;
}

// const showData = async () => {
//     const data = await getDataMovieFromApi('Batman');
//     console.log(data);
// }

// showData();
export const getData = {
    getDataMovieFromApi,
};

