import express from 'express';
import { addMovies, likeMovies, disLikeMovies, getMoviesBySearch, addToLikedMovies, getLikedMovies, removeFromLikedMovies } from '../controllers/user.js';

const router = express.Router();

router.post('/add', addToLikedMovies);
router.get('/liked/:email', getLikedMovies);
router.put('/delete', removeFromLikedMovies);
router.put("/like", likeMovies);
router.put("/disLike", disLikeMovies);
router.patch("/search", getMoviesBySearch);
router.post("/addMovies", addMovies);

export default router;