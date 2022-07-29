import { ThreeDots } from 'react-loader-spinner';
import { useFetchInfo } from 'hooks/useFetch';
import {
  CastSection,
  CastItem,
  CastList,
  CastName,
  CastPhoto,
} from './Cast.styled';
import boy from '../../Photo/boy.jpg';

const Cast = () => {
  const { data, loading } = useFetchInfo('credits');
  const cast = data.cast;
  if (!cast) {
    return;
  }

  function posterPath(poster_path) {
    if (poster_path === null) {
      return boy;
    }
    return `https://image.tmdb.org/t/p/w500/${poster_path}`;
  }
  let newCast = cast.slice(0, 21);

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
