import styled from 'styled-components';

export const CardSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  overflow-x: hidden;
`;

export const CardSliderWrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 1rem;
  transform: translateX(0px);
  transition: 0.3s ease-in-out;
  margin-left: 50px;
`;

export const Title = styled.h1`
  color: #fff;
  margin-left: 50px;
`;

export const SliderActions = styled.div`
  display: flex;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 50px;
  transition: 0.3s ease-in-out;

  svg{
    font-size: 2rem;
    color: #fff;
  }
`;

export const SliderActionLeft = styled.div`
  position: absolute;
  justify-content: center;
  display: ${({controls}) => (controls ? 'flex': 'none')};
  align-items: center;
  left: 0;
  z-index: 999;
`;

export const SliderActionRight = styled.div`
  position: absolute;
  justify-content: center;
  display: ${({controls}) => (controls ? 'flex': 'none')};
  align-items: center;
  right: 0;
  z-index: 99;
`;




