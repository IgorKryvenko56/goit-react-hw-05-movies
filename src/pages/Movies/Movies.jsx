import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmByQuery } from 'services/api';
import { Form, Loader, MovieList } from 'components/index';

const MoviesPage = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearched = searchParams.get('query');

  useEffect(() => {
    if (!querySearched) return;
    async function getFilms() {
      try {
        setIsLoading(true);

        const { results } = await getFilmByQuery(querySearched);

        setSearchedMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getFilms();
  }, [querySearched]);

  const handleOnSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      {error && <div>Try to reload the page</div>}
      {isLoading && <Loader />}
      <Form onSubmit={handleOnSubmit} />
      {Boolean(searchedMovies.length) && <MovieList array={searchedMovies} />}
    </>
  );
};

export default MoviesPage;
