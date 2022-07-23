import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
// import { Notify } from 'notiflix';
// import { ThreeDots } from 'react-loader-spinner';
import {
  MovieCard,
  MovieName,
  MovieText,
  MovieTextName,
  MoviePoster,
  MovieInformSection,
} from './MovieDetails.styled';
import { fetchSelectedMovie } from 'API/api';
const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [overview, setoverview] = useState('');
  const [genres, setgenres] = useState([]);
  const [poster_path, setposter_path] = useState('');
  const [popularity, setpopularity] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    fetchSelectedMovie(movieId)
      .then(({ title, overview, genres, poster_path, popularity }) => {
        setTitle(title);
        setoverview(overview);
        setgenres(genres);
        setposter_path(poster_path);
        setpopularity(popularity);
      })

      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [movieId]);

  const ganreList = genres.map(ganre => ganre.name).join(', ');

  function posterPath(poster_path) {
    if (poster_path === '') {
      return;
    }
    if (poster_path === null) {
      return Notify.warning('No poster');
    }

    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }

  return (
    <MovieCard>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}

      <MoviePoster src={posterPath(poster_path)}></MoviePoster>
      <MovieInformSection>
        <MovieName>{title}</MovieName>
        <MovieText>
          <MovieTextName>Popularity:</MovieTextName> {popularity}
        </MovieText>
        <MovieTextName>Overview</MovieTextName>{' '}
        <MovieText> {overview}</MovieText>
        <MovieTextName>Genres</MovieTextName>
        <MovieText>{ganreList}</MovieText>
      </MovieInformSection>
    </MovieCard>
  );
};
export default MovieDetails;
