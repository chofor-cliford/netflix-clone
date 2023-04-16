import styled from 'styled-components';

export const PlayerContainer = styled.div`
   width: 100%;
   height: 100vh;
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 100%;
  
`;

export const Back = styled.div`
  position: absolute;
  padding: 2rem;
  z-index: 1;
  
  svg{
    font-size: 3rem;
    cursor: pointer;

  }
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;





