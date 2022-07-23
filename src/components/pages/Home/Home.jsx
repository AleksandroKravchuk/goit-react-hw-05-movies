import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import {
  HomeTitle,
  HomeList,
  HomeMovie,
  HomePageSection,
  MovieLink,
} from './Home.styled';
import { fetchImages } from 'API/api';

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchImages()
      .then(data => setTopMovies(data.results))
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, []);
  return (
    <HomePageSection>
      <HomeTitle>Trending today</HomeTitle>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      <HomeList>
        {topMovies.map(({ original_title, original_name, id }) => (
          <HomeMovie key={id}>
            <MovieLink>
              {original_title} {original_name}
            </MovieLink>
          </HomeMovie>
        ))}
      </HomeList>
    </HomePageSection>
  );
};

export default HomePage;
