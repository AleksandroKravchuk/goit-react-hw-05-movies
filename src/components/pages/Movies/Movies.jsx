import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ThreeDots } from 'react-loader-spinner';
import { SearchForm, Input, SearchButton } from './Movies.styled';
import { fetchSearchMovies } from 'API/api';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Form = () => {
  const [searcName, setSearchName] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('query');
  const search = submitName || name;

  useEffect(() => {
    if (search === '' || search === null) {
      return;
    }
    setLoading(true);
    fetchSearchMovies(search)
      .then(({ results, total_results }) => {
        if (total_results === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
        setSearchMovies([...results]);
      })
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [search]);

  const addSearchName = evt => {
    const { value } = evt.target;
    setSearchName(value);
  };
  const hendelSubmit = evt => {
    evt.preventDefault();
    if (searcName.trim() === '') {
      return Notify.warning('Please enter name movie');
    }
    setSearchParams(`query=${searcName}`);
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
      {searchMovies && <MovieList searchMovies={searchMovies} />}
    </>
  );
};

export default Form;
