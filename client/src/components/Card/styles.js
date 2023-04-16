import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
`;

export const Image = styled.img`
  border-radius: 0.2rem;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const HoverdContainer = styled.div`
  z-index: 99;
  color: #fff;
  height: max-content;
  width: 20rem;
  position: absolute;
  top: -18vh;
  left: 0;
  border-radius: 0.3rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  background-color: #181818;
  transition: 0.3s ease-in-out;
`;

export const ImageVideoContainer = styled.div`
  position: relative;
  height: 140px;
  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 0.3rem;
    top: 0;
    z-index: 4;
    position: absolute;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 0.3rem;
  top: 0;
  z-index: 5;
  position: absolute;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
`;

export const Name = styled.h3`
  display: flex;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      color: #b8b8b8;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GenreContainer = styled.div`
  display: flex;
`;

export const GenreList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
export const Genre = styled.li`
  padding-right: 0.7rem;
`;
