import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlices";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };

// export const { addSong, removeSong } = songsSlice.actions; // action creator that the slice automatically creates

// export const { addMovie, removeMovie } = moviesSlice.actions;

// console.log(moviesSlice.actions.reset.toString());

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong(""));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));


