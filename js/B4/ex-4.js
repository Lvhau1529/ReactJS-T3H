import { getData } from "./service/movie.js";

const showData = async () => {
	const data = await getData.getDataMovieFromApi('Batman');
	console.log(data);
};
showData();
