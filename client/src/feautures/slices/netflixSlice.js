import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TMDB_BASE_URL, API_KEY } from "../../utils/constants";

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  try {
    const { data } = await axios.get(
      `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
});

const createArray = (results, movies, genres) => {
  results?.forEach((movie) => {
    const movieGenre = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres?.find(({ id }) => id === genre);
      if (name) movieGenre.push(name.name);
    });
    if (movie.backdrop_path) {
      movies.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genre: movie?.movieGenres?.slice(0, 3),
      });
    }
  });
};

const getRawData = async (api, genres, paging) => {
  const movies = [];

  for (let i = 1; movies.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArray(results, movies, genres);
  }
  return movies;
};

export const fetchMovies = createAsyncThunk(
  "netflix/trending",
  async ({ type }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();

    const data = getRawData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${API_KEY}`,
      genres,
      true
    );

    return data;
  }
);

export const getUserLikedMovies = createAsyncThunk(
  "netflix/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`https://netflix-clone-dx4e.onrender.com/api/user/liked/${email}`);

    return movies;
  }
);

export const removeFromLikedMovies = createAsyncThunk(
  "netflix/removeLiked",
  async ({ email, movieId }) => {
    const {
      data: { movies },
    } = await axios.put(`https://netflix-clone-dx4e.onrender.com/api/user/delete`, {
      email,
      movieId,
    });

    return movies;
  }
);

export const likeMovies = createAsyncThunk("netflix/like", async (email) => {
  const {
    data: { likes },
  } = await axios.put(`https://netflix-clone-dx4e.onrender.com/api/user/like`, {
    email,
  });

  return likes;
});
export const disLikeMovies = createAsyncThunk(
  "netflix/disLike",
  async (email) => {
    const {
      data: { disLikes },
    } = await axios.put(`https://netflix-clone-dx4e.onrender.com/api/user/disLike`, { email });

    return disLikes;
  }
);
export const addMovies = createAsyncThunk(
  "netflix/addMovies",
  async ({ email, data }) => {
    console.log(email, data);
    const {
      data: { movies },
    } = await axios.post(`https://netflix-clone-dx4e.onrender.com/api/user/addMovies`, {
      email,
      data,
    });

    return movies;
  }
);
export const getMoviesBySearch = createAsyncThunk(
  "netflix/search",
  async ({ searchTerm, email }) => {
    const {
      data: { movies },
    } = await axios.patch(`https://netflix-clone-dx4e.onrender.com/api/user/search`, {
      searchTerm,
      email,
    });

    return movies;
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  "netflix/genre",
  async ({ type, genre }, thunkApi) => {
    const {
      netflix: { genres },
    } = thunkApi.getState();

    const data = getRawData(
      `${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`,
      genres
    );

    return data;
  }
);

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  email: undefined,
  searchTerm: "",
  likes: [],
  dislikes: [],
};

const netflixSlice = createSlice({
  name: "Netflix",
  initialState,
  reducers: {
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state, { payload }) => {
      state.genresLoaded = true;
    });
    builder.addCase(getGenres.fulfilled, (state, { payload }) => {
      state.genres = payload.genres;
      state.genresLoaded = false;
    });
    builder.addCase(getGenres.rejected, (state, { payload }) => {
      state.genresLoaded = false;
      console.log(payload);
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(fetchMoviesByGenre.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchMoviesByGenre.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(getUserLikedMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(getUserLikedMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(removeFromLikedMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(removeFromLikedMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(likeMovies.fulfilled, (state, { payload }) => {
      state.likes = payload;
    });
    builder.addCase(likeMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(disLikeMovies.fulfilled, (state, { payload }) => {
      state.dislikes = payload;
    });
    builder.addCase(disLikeMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(addMovies.fulfilled, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(addMovies.rejected, ({ payload }) => {
      console.log(payload);
    });
    builder.addCase(getMoviesBySearch.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(getMoviesBySearch.rejected, ({ payload }) => {
      console.log(payload);
    });
  },
});

export const { setEmail } = netflixSlice.actions;

export default netflixSlice.reducer;
