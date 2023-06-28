import axios from 'axios';
import defaultPhoto from 'img/default-photo.jpeg';
import defaultActor from 'img/defaultPerson.jpeg';
import { getGenres } from 'helpers/getGenres';
// import defaultImg from 'path/to/defaultImg'; 


// // const API_KEY = 'c408143b5b9b33be7013bb99b759f838';
const API_KEY = '48a6f07a25987cf4ac63d30acb4cff08';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const params = {
    api_key: API_KEY,
  };
  const { data } = await axios.get('/trending/movie/week', { params });
  const results = data.results.map(({ id, title }) => ({ id, title }));
  return { results };
};

export const getFilmByQuery = async q => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
    query: q,
  };
  const { data } = await axios.get('/search/movie', { params });
  const results = data.results.map(({ id, original_title }) => ({
    id,
    title: original_title,
  }));
  return { results };
};

export const getDetailedFilmInfo = async movieId => {
  const params = {
    api_key: API_KEY,
  };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  const {
    id,
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = data;

  return {
    id,
    original_title,
    genres: genres.length ? getGenres(genres) : "Genres aren't given",
    overview,
    poster_path: poster_path
      ? 'https://image.tmdb.org/t/p/w300' + poster_path
      : defaultPhoto,
    release_date: new Date(release_date).getFullYear(),
    vote_average: Math.round(vote_average * 10),
  };
};

export const getCastInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/credits`, { params });

  const array = data.cast.map(
    ({ id, original_name, profile_path, character }) => ({
      id,
      original_name,
      profile_path: profile_path
        ? 'https://image.tmdb.org/t/p/w300' + profile_path
        : defaultActor,
      character,
    })
  );
  return array;
};

export const getReviewsInfo = async movieId => {
  const params = {
    api_key: API_KEY,
    language: 'en-US',
  };
  const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });

  const array = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));

  return array;
};

// import axios from 'axios';

// const API_KEY = '48a6f07a25987cf4ac63d30acb4cff08';
// const BASE_URL = 'https://api.themoviedb.org/3';
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// const END_POINTS = {
//   trending: '/trending/movie/week',
//   querySearch: '/search/movie',
//   movieDetails: '/movie',
//   movieCredits: '/credits',
//   movieReviews: '/reviews',
// };

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = {
//   api_key: API_KEY,
//   language: 'en-US',
//   include_adult: false,
// };

// export const getMovies = async (page = 1) => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.trending}`, {
//     params: { page },
//   });
//   return res.data.results;
// };

// export const fetchByQuery = async (query, page = 1) => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.querySearch}`, {
//     params: { query, page },
//   });
//   return res.data.results;
// };

// export const fetchMoviesDetails = async (id) => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.movieDetails}/${id}`);
//   return res.data;
// };

// export const fetchMoviesCredits = async (id) => {
//   const res = await axios.get(
//     `${BASE_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieCredits}`
//   );
//   return res.data.cast;
// };

// export const fetchMoviesReviews = async (id, page = 1) => {
//   const res = await axios.get(
//     `${BASE_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieReviews}`,
//     {
//       params: { page },
//     }
//   );
//   return res.data.results;
// };

// export function fetchMovieSearch(query) {
//   return axios
//     .get(`${BASE_URL}${END_POINTS.querySearch}`, {
//       params: { query, page: 1 },
//     })
//     .then(response => {
//       if (response.data && response.data.results) {
//         return response.data.results;
//       } else {
//         throw new Error('Invalid response format');
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching movies:', error);
//       throw error;
//     });
// }

// import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

// const END_POINTS = {
//   trending: '/trending/movie/week',
//   querySearch: '/search/movie',
//   movieDetails: '/movie',
//   movieCredits: '/credits',
//   movieReviews: '/reviews',
// };

// // Set the default headers for all requests
// axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common['Authorization'] =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGE2ZjA3YTI1OTg3Y2Y0YWM2M2QzMGFjYjRjZmYwOCIsInN1YiI6IjY0ODgzMWI1ZTI3MjYwMDEyODdiNWRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KKmeR4CGfy8trQQTf3L_cjfaW6uqP2oo_kr86Vvxm7Y';
// axios.defaults.headers.common['Accept'] = 'application/json';

// export const getMovies = async (page = 1) => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.trending}`, {
//     params: { page },
//   });
//   return res.data.results;
// };

// export const fetchByQuery = async (query, page = 1) => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.querySearch}`, {
//     params: { query, page },
//   });
//   return res.data.results;
// };

// export const fetchMoviesDetails = async id => {
//   const res = await axios.get(`${BASE_URL}${END_POINTS.movieDetails}/${id}`);
//   return res.data;
// };

// export const fetchMoviesCredits = async id => {
//   const res = await axios.get(
//     `${BASE_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieCredits}`
//   );
//   return res.data.cast;
// };

// export const fetchMoviesReviews = async (id, page = 1) => {
//   const res = await axios.get(
//     `${BASE_URL}${END_POINTS.movieDetails}/${id}${END_POINTS.movieReviews}`,
//     {
//       params: { page },
//     }
//   );
//   return res.data.results;
// };

// export function fetchMovieSearch(query) {
//   return axios
//     .get(`${BASE_URL}${END_POINTS.querySearch}`, {
//       params: { query, page: 1 },
//     })
//     .then(response => {
//       if (response.data && response.data.results) {
//         return response.data.results;
//       } else {
//         throw new Error('Invalid response format');
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching movies:', error);
//       throw error;
//     });
// }
