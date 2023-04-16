import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies,  getUserLikedMovies } from '../../feautures/slices/netflixSlice';
import {  Navbar } from '../../components';
import { Grid, LikedMoviesContainer, LikedMoviesWrapper, Title } from './styles';
import Card from '../../components/Card/Card';

const LikedMovies = () => {
  const [isScroll, setIsScroll] = useState(false);
  const dispatch = useDispatch();
  const { email, genresLoaded, movies} = useSelector((state) => ({...state.netflix}))

  useEffect(() => {
    if(email) dispatch(getUserLikedMovies(email))
  
  }, [email, dispatch])
  
  useEffect(() => {
    if(genresLoaded) dispatch(fetchMovies({type: 'movie'}));
  },[genresLoaded, dispatch])

  window.onscroll = (() => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => window.onscroll = null
  })


  return (
    <LikedMoviesContainer>
        <Navbar isScroll={isScroll} />
        <LikedMoviesWrapper>
            <Title>My list</Title>
            <Grid>
                {movies.map((movie, i) => <Card movieData={movie} key={i} index={i} isLiked={true} /> )}   
            </Grid>
        </LikedMoviesWrapper>
    </LikedMoviesContainer>
  )
}

export default LikedMovies