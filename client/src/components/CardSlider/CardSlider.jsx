import React, { useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import Card from '../Card/Card';
import { CardSliderContainer, CardSliderWrapper, SliderActionLeft, SliderActionRight, SliderActions, Title } from './styles'

const  CardSlider = ({data, title}) => {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const listRef = useRef(null);
  
  const handleDirection = (direction) => {  
    
    let counter = 1;
    const maxWidth = -1635.43;
    const minWidth = 38.953;
    if(listRef.current && counter <= 2){
      let distance = listRef.current.getBoundingClientRect().x - 70;
      const addWidth = 230 + distance;
      const subWidth = -230 + distance;

      if(direction === 'left' && addWidth <= minWidth ){
        listRef.current.style.transform = `translateX(${addWidth}px`;
        setSliderPosition(sliderPosition - 1);
        counter += 1;
      }
      if(direction === 'right' && subWidth >= maxWidth ){
        listRef.current.style.transform = `translateX(${subWidth}px`;
        setSliderPosition(sliderPosition + 1);
        counter += 1;
      }  
    }}; 

  return (
    <CardSliderContainer 
      onMouseEnter={() => setShowControls(true)} 
      onMouseLeave={() => setShowControls(false)}
    >
      <Title>{title}</Title>
      <SliderActions>
        <SliderActionLeft controls={showControls ? true : false}>
          <AiOutlineLeft onClick={() => handleDirection('left')}/>
        </SliderActionLeft>          
        <CardSliderWrapper ref={listRef}>
          {data?.map((item, i) =>
            <Card key={i} movieData={item} index={i}/>
          )}    
        </CardSliderWrapper>
        <SliderActionRight controls={showControls ? true : false}>
          <AiOutlineRight onClick={() => handleDirection('right')}/>
        </SliderActionRight>  
      </SliderActions>    
    </CardSliderContainer>
  )
}

export default React.memo(CardSlider)