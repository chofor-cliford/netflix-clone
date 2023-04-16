import User from "../models/userModel.js";

export const addToLikedMovies = async (req, res) => {
  const { email, data } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      const { likedMovies } = oldUser;
      const alreadyLikedMovie = likedMovies?.find(({ id }) => id === data.id);

      if (!alreadyLikedMovie) {
        await User.findByIdAndUpdate(
          oldUser._id,
          { likedMovies: [...oldUser.likedMovies, data] },
          { new: true }
        );
      } else {
        return res
          .status(404)
          .json({ msg: "Movie already added to Liked list" });
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }
    return res.status(200).json({ msg: "Movie added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro adding movie" });
  }
};

export const getLikedMovies = async (req, res) => {
  const { email } = req.params;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ msg: "User with given email not found." });
    const { likedMovies } = oldUser;

    res.status(200).json({ movies: likedMovies });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching movies" });
  }
};

export const removeFromLikedMovies = async (req, res) => {
  const { email, movieId } = req.body;

  try {
    const oldUser = await User.findOne({ email });
    const { likedMovies } = oldUser;

    if (oldUser) {
      console.log(likedMovies);
      const movieIndex = likedMovies?.findIndex(({ id }) => id === movieId);

      if (!movieIndex) return res.status(404).send({ msg: "Movie not found" });

      likedMovies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(oldUser._id, { likedMovies }, { new: true });
    }
    res.status(200).json({ movies: likedMovies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error deleting movie" });
  }
};

export const addMovies = async (req, res) => {
  const { email, data } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      const { movies } = oldUser;
      const alreadyaddedMovie = movies?.find(({ id }) => id === data.id);

      if (!alreadyaddedMovie) {
        await User.findByIdAndUpdate(
          oldUser._id,
          { movies: [...movies, data] },
          { new: true }
        );
      } else {
        return res.status(404).json({ msg: "Movie already added to the list" });
      }
    } else {
      await User.create({ email, movies: [data] });
    }
    return res.status(200).json({ msg: "Movie added Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro adding movie" });
  }
};

export const disLikeMovies = async (req, res) => {
  const { email } = req.body;
  const oldUser = await User.findOne({ email });
console.log("Old User :", oldUser)
  if(!oldUser)  return res.status(404).json({ msg: "User with given email not found." });
  let { _id, likes, dislikes } = oldUser;
  
  const likeIndex = likes.findIndex((id) => id === _id);
  const dislikeIndex = dislikes.findIndex((id) => id === _id);
console.log("_id: ", _id, "disLikesIndex: ", dislikeIndex, "LikeIndex: ", likeIndex);
  if (likeIndex === -1 && dislikeIndex === -1) {
    dislikes.push(_id);
    likes = likes.filter((id) => id !== _id);
  } else {
    dislikes = dislikes?.filter((id) => id !== _id);
  }
  const updatedPost = await User.findByIdAndUpdate(_id, oldUser, { new: true, });
  console.log("disLike Success");
  res.json(updatedPost);
};

export const likeMovies = async (req, res) => {
  const { email } = req.body;
  const oldUser = await User.findOne({ email });

  if (!oldUser)
    return res.status(404).json({ msg: "User with given email not found." });
  let { _id, likes, dislikes } = oldUser;

  const likeIndex = likes.findIndex((id) => id === _id);
  const dislikeIndex = dislikes.findIndex((id) => id === _id);

  if (likeIndex === -1 || dislikeIndex === -1) {
    likes.push(_id);
    dislikes = dislikes.filter((id) => id !== _id);
  } else {
    likes = likes.filter((id) => id !== _id);
  }
  const updatedPost = await User.findByIdAndUpdate(_id, oldUser, { new: true });
  console.log("Like Success");
  res.json(updatedPost);
};

export const getMoviesBySearch = async (req, res) => {
  const { searchTerm, email } = req.body;
  const oldUser = await User.findOne({ email });

  if (!oldUser)
    return res.status(404).json({ msg: "User with given email not found." });
  
  try {
    const { movies } = oldUser;
     
    const title = new RegExp(searchTerm, "i")
    const data = await movies.map((item) => 
      item.filter(({name}) => name.match(title)))
      ;
    console.log(data)
    res.status(200).json(data);

  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message });
  }
};
