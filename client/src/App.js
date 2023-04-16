import React from 'react';
import { Routes, Route } from 'react-router';
import { Netflix, Login, Signup, Player, Movies, TvShows, LikedMovies } from './containers';
import GlobalStyle from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Netflix />} />
        <Route path='/player' element={<Player />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/mylist' element={<LikedMovies />} />
        <Route path='/tv' element={<TvShows />} />
      </Routes>
    </>
  )
}

export default App