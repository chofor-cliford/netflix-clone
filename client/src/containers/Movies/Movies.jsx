import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../../feautures/slices/netflixSlice';
import { DataContainer, MoviesContainer, NavContainer } from './styles';
import { Slider, Navbar, NotAvailable, SelectGenre } from '../../components';

const Movies = () => {
  const [isScroll, setIsScroll] = useState(false);
  const dispatch = useDispatch();
  const {genres, genresLoaded, movies} = useSelector((state) => ({...state.netflix}))

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch])
  
  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({type: 'movie'}));
  },[genresLoaded, dispatch])

  window.onscroll = (() => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => window.onscroll = null
  })

  return (
    <MoviesContainer>
      <NavContainer>
        <Navbar isScroll={isScroll} /> 
      </NavContainer>    
      <DataContainer>
        <SelectGenre genres={genres} type='movie' />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </DataContainer>
    </MoviesContainer>
  )
}

export default Movies