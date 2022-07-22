import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { SearchForm, Input, SearchButton } from './Movies.styled';
import { fetchSearchImages } from 'API/api';

const Form = ({ onSubmit }) => {
  const [searcName, setSearchName] = useState('');
  const [submitName, setSubmitName] = useState('');

  useEffect(() => {
    if (submitName === '') {
      return;
    }
    fetchSearchImages(submitName)
      .then(({ results, total_pages, total_results }) => {
        if (total_results === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      })
      .catch(error => Notify.failure('Ooooops somthing went wrong'));
    // .finally(() => setLoading(false));;
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
    onSubmit(searcName);
    setSearchName('');
  };
  return (
    <SearchForm onSubmit={hendelSubmit}>
      <Input value={searcName} onChange={addSearchName} />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default Form;
