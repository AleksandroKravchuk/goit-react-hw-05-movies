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
  // ButtonMore,
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
  let newCast = cast.slice(0, 21);
  // const castArray = cast > newCast;

  // function wathedMore() {
  //   newCast = newCast.push(cast.slice(21, 41));
  // }
  // console.log(newCast);
  return (
    <CastSection>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      {cast.length !== 0 ? (
        <CastList>
          {newCast.map(item => (
            <CastItem key={item.id}>
              <CastName>{item.name}</CastName>

              <CastPhoto src={posterPath(item.profile_path)} alt="photo cast" />
            </CastItem>
          ))}
        </CastList>
      ) : (
        <CastName>We dont have any cast for this movie</CastName>
      )}
    </CastSection>
  );
};
export default Cast;
