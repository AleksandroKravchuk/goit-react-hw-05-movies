import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import HomePage from './pages/Home/Home';
import Header from './Header/Header';
import Form from './pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  // const [searchName, setSearchName] = useState('');
  // const onSubmit = searhValue => {
  //   setSearchName(searhValue);
  // };
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" exact element={<Form />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
