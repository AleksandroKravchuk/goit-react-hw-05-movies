import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import HomePage from './pages/Home/Home';
import Header from './Header/Header';
import Form from './pages/Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  // const [searchName, setSearchName] = useState('');
  // const onSubmit = searhValue => {
  //   setSearchName(searhValue);
  // };
  return (
    <>
      {/* <Header></Header> */}

      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<Form />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
