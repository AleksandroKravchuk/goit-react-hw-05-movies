import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import {  fetchMovieInfo } from 'API/api';

export const useFetch = (meaning) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoading(true);
    fetchMovieInfo(movieId,meaning)
      .then(data => {
        setdata(data);
      })
      .catch(error => Notify.failure('Ooooops somthing went wrong'))
      .finally(() => setLoading(false));
  }, [movieId, meaning]);
    return { data, loading };
}
