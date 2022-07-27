import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { HomeTitle, HomePageSection } from './Home.styled';
import { fetchMovies } from 'API/api';
import { MovieList } from 'components/MovieList/MovieList';

const HomePage = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchMovies()
      .then(data => setTopMovies(data.results))
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, []);
  return (
    <HomePageSection>
      <HomeTitle>Trending today</HomeTitle>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      <MovieList searchMovies={topMovies} />
    </HomePageSection>
  );
};

export default HomePage;
