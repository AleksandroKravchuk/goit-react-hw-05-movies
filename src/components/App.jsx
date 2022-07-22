import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/Home/Home';
import Header from './Header/Header';
import Form from './pages/Movies/Movies';

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
        <Route path="/movies" element={<Form onSubmit={onSubmit} />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
};
