import React, { useEffect, useState } from 'react'
import { Navbar, Slider } from '../../components';
import { ButtonContainer, Hero, HeroImage, Logo, LogoContainer, MovieContainer, NetflixContainer, Button } from './styles';
import movieLogo from '../../assets/homeTitle.webp';
import bgImage from '../../assets/home.jpg';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addMovies, fetchMovies, getGenres } from '../../feautures/slices/netflixSlice';

const Netflix = () => {
  const [isScroll, setIsScroll] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { genresLoaded, movies, email} = useSelector((state) => ({...state.netflix}))

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])
  console.log(email, movies)
  useEffect(() => {
    if(genresLoaded) {
      dispatch(fetchMovies({type: 'all'}));
      
    }
  },[genresLoaded, dispatch]);

  useEffect(() => {
    dispatch(addMovies({email, data:movies}))
  
  }, [email, movies, dispatch])
  

  window.onscroll = (() => {
    setIsScroll(window.scrollY === 0 ? false : true);
    return () => window.onscroll = null
  })

  return (
    <NetflixContainer>
      <Navbar isScroll={isScroll} />
      <Hero>
        <HeroImage src={bgImage} alt='background-image' />
        <MovieContainer>
          <LogoContainer>
            <Logo src={movieLogo} alt='movie-logo'/>
          </LogoContainer>
          <ButtonContainer>
            <Button onClick={() => navigate('/player')}><FaPlay />  Play</Button>
            <Button> <AiOutlineInfoCircle />  More Info</Button>
          </ButtonContainer>
        </MovieContainer>
      </Hero>
      <Slider movies={movies} />
    </NetflixContainer>
  )
}

export default Netflix