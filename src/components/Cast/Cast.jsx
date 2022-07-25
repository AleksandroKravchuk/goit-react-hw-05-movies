import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { fetchMovieCast } from 'API/api';
import {
  CastSection,
  CastItem,
  CastList,
  CastName,
  CastPhoto,
} from './Cast.styled';
import boy from '../../Photo/boy.jpg';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    //    if (!movieId) {
    //      return;
    //    }
    setLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(cast);
      })

      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [movieId]);

  function posterPath(poster_path) {
    if (poster_path === null) {
      return boy;
    }

    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }
  return (
    <CastSection>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      {cast && (
        <CastList>
          {cast.map(item => (
            <CastItem key={item.id}>
              <CastName>{item.name}</CastName>

              <CastPhoto src={posterPath(item.profile_path)} alt="photo cast" />
            </CastItem>
          ))}
        </CastList>
      )}
    </CastSection>
  );
};
export default Cast;
