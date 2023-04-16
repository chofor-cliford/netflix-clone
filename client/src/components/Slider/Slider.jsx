import React from 'react'
import { CardSlider } from '..'
import { SliderContainer } from './styles'

const Slider = ({ movies }) => {
  const getMoviesFromRange = (from, to) => {
    return movies?.slice(from, to)
  }

  return (
    <SliderContainer>
      <CardSlider title='Trending Now' data={getMoviesFromRange(0, 10)} />
      <CardSlider title='New Releases' data={getMoviesFromRange(10, 20)} />
      <CardSlider title='Blockbuster Movies' data={getMoviesFromRange(20, 30)} />
      <CardSlider title='Popular On Netflix' data={getMoviesFromRange(30, 40)} />
      <CardSlider title='Action Movies' data={getMoviesFromRange(40, 50)} />
      <CardSlider title='Epic' data={getMoviesFromRange(50, 60)} />
    </SliderContainer>
  )
}

export default Slider