import { HomeList, HomeMovie, MovieLink } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ searchMovies }) => {
  const location = useLocation();

  return (
    <HomeList>
      {searchMovies.map(({ original_title, original_name, id }) => (
        <HomeMovie key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {original_title} {original_name}
          </MovieLink>
        </HomeMovie>
      ))}{' '}
    </HomeList>
  );
};
