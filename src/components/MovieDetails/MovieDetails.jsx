import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { FcLeft } from 'react-icons/fc';
import { ThreeDots } from 'react-loader-spinner';
import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import {
  MovieCard,
  MovieName,
  MovieText,
  MovieTextName,
  MoviePoster,
  MovieInformSection,
  AdditionalInformation,
  AdditionalName,
  AdditionalLink,
  AdditionalList,
  AdditionalItem,
  ButtonBack,
  IconBack,
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

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

      .catch(error => {
        if (error.response.status === 404) {
          Notify.failure('No movie on this request');
        }
      })
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
    <>
      {title && (
        <>
          <ButtonBack to={backLinkHref}>
            <IconBack>
              {' '}
              <FcLeft />
            </IconBack>
            Go back
          </ButtonBack>
          <MovieCard>
            {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}

            <MoviePoster
              src={posterPath(poster_path)}
              alt="photo movie"
            ></MoviePoster>
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
          <AdditionalInformation>
            <AdditionalName>Additional information</AdditionalName>
            <AdditionalList>
              <AdditionalItem>
                <AdditionalLink to={'cast'} state={{ from: backLinkHref }}>
                  Cast
                </AdditionalLink>
              </AdditionalItem>
              <AdditionalItem>
                <AdditionalLink to={'reviews'} state={{ from: backLinkHref }}>
                  Reviews
                </AdditionalLink>
              </AdditionalItem>
            </AdditionalList>
            <Outlet />
          </AdditionalInformation>
        </>
      )}
    </>
  );
};
export default MovieDetails;
