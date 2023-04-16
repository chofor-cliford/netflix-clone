import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import video from '../../assets/video.mp4';
import { Back, PlayerContainer, PlayerWrapper, Video, VideoContainer } from './styles';
import { useNavigate } from 'react-router-dom';

const Player = () => {
    const navigate = useNavigate()

  return (
    <PlayerContainer>
       <PlayerWrapper>
          <Back>
            <BsArrowLeft onClick={() => navigate(-1)}/>
          </Back>
          <VideoContainer>
            <Video src={video} loop controls muted autoPlay/>
          </VideoContainer>
       </PlayerWrapper>
    </PlayerContainer>
  )
}

export default Player