import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  likedMovies: Array,
  movies: Array,
  likes: { type: [String], default: [] },
  dislikes: { type: [String], default: [] },
});

const User = mongoose.model("users", userSchema);

export default User;
