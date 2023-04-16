import React from 'react'
import background from '../../assets/login.jpg';
import { BgContainer, BgImage } from './styles';

const BackgroundImage = () => {
  return (
    <BgContainer>
      <BgImage src={background} alt='background-image' />
    </BgContainer>
  )
}

export default BackgroundImage