import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  isActive: false,
  activeSong: {},
  isPlaying: false
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload
    }
  },
});

export const { setActiveSong, playPause } = playerSlice.actions;

export default playerSlice.reducer;
