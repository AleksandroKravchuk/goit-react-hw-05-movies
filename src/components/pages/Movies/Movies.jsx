import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { SearchForm, Input, SearchButton } from './Movies.styled';
import { fetchSearchMovies } from 'API/api';
import { HomeList, HomeMovie, MovieLink } from '../Home/Home.styled';

const Form = () => {
  const [searcName, setSearchName] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitName === '') {
      return;
    }
    setLoading(true);
    fetchSearchMovies(submitName)
      .then(({ results, total_pages, total_results }) => {
        if (total_results === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setSearchMovies([...results]);
      })
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [submitName]);

  const addSearchName = evt => {
    const { value } = evt.target;
    setSearchName(value);
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    if (searcName.trim() === '') {
      return Notify.warning('Please enter name movie');
    }
    setSubmitName(searcName);
    setSearchName('');
  };
  return (
    <>
      <SearchForm onSubmit={hendelSubmit}>
        <Input value={searcName} onChange={addSearchName} />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {loading && <ThreeDots color="#00BFFF" height={60} width={60} />}
      {searchMovies && (
        <HomeList>
          {searchMovies.map(({ original_title, original_name, id }) => (
            <HomeMovie key={id}>
              <MovieLink to={`/movies/${id}`}>
                {original_title} {original_name}
              </MovieLink>
            </HomeMovie>
          ))}{' '}
        </HomeList>
      )}
    </>
  );
};

export default Form;
