import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Header = lazy(() => import('./Header/Header'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const Form = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<ThreeDots color="#00BFFF" height={60} width={60} />}>
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
    </Suspense>
  );
};
