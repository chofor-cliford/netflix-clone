import styled from 'styled-components';

export const NetflixContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  
`;

export const Hero = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: brightness(60%);
`;

export const MovieContainer = styled.div`
  position: absolute;
  bottom: 0.5rem;
  @media screen and (min-width: 2000px){
    bottom: 5rem;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 5rem;
  

`;

export const ButtonContainer = styled.div`
  margin: 5rem;
  gap: 2rem;
  display: flex;
  
`;
export const Button = styled.button`
  font-size: 1.4rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  padding-left: 2rem;
  display: flex;
  gap: 1rem;
  padding-right: 2.4rem;
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover{
    opacity: 0.8;
  }
  &:nth-child(2){
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
  }

  svg {
    font-size: 1.8rem;
  }
`;




