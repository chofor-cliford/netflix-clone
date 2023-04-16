import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  CardContainer,
  HoverdContainer,
  ImageVideoContainer,
  Image,
  Video,
  InfoContainer,
  Name,
  Icon,
  Controls,
  GenreContainer,
  GenreList,
  Genre,
} from "./styles";
import video from "../../assets/video.mp4";
import { IoIosPlayCircle } from "react-icons/io";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "../../utils/firebase-config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { disLikeMovies, likeMovies, removeFromLikedMovies } from "../../feautures/slices/netflixSlice";

const Card = ({ movieData, index, isLiked }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(undefined);
  const { likes, disLikes } = useSelector((state) => ({...state.netflix}))

  onAuthStateChanged(Auth, (user) => {
    if (user) setEmail(user.email);
    else navigate("/login");
  });

  const addToList = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/add", {
        email,
        data: movieData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    dispatch(likeMovies(email))
  };
  const handleDisLike = () => {
    dispatch(disLikeMovies(email))
  }

  return (
    <CardContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movieData?.image}`}
        alt="movie"
      />
      {isHovered && (
        <HoverdContainer>
          <ImageVideoContainer>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData?.image}`}
              alt="movie"
              onClick={() => navigate("/player")}
            />
            <Video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigate("/player")}
            />
          </ImageVideoContainer>
          <InfoContainer>
            <Name onClick={() => navigate("/player")}>{movieData?.name}</Name>
            <Icon>
              <Controls>
                <IoIosPlayCircle
                  title="play"
                  onClick={() => navigate("/player")}
                />
                <span>{likes?.length}</span><RiThumbUpFill title="Like" onClick={handleLike} />
                <span>{disLikes?.length}</span><RiThumbDownFill title="Dislike" onClick={handleDisLike} />
                {isLiked ? (
                  <BsCheck
                    title="Remove From List"
                    onClick={() =>
                      dispatch(
                        removeFromLikedMovies({ email, movieId: movieData.id })
                      )
                    }
                  />
                ) : (
                  <AiOutlinePlus title="Add to my list" onClick={addToList} />
                )}
              </Controls>
              <BiChevronDown title="More Info" />
            </Icon>
          </InfoContainer>
          <GenreContainer>
            <GenreList>
              <Genre>{FormData.genre}</Genre>
            </GenreList>
          </GenreContainer>
        </HoverdContainer>
      )}
    </CardContainer>
  );
};

export default React.memo(Card);
