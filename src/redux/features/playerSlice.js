import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  isActive: false,
  activeSong: {},
  isPlaying: false,
  currentSongs: []
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.i;
      state.isActive = true;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks
      } else {
        state.currentSongs = action.payload.data
      }
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload
    }
  },
});

export const { setActiveSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;
