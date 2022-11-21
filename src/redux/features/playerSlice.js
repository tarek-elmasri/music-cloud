import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  isActive: false,
  activeSong: {},
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
  },
});

export const { setActiveSong } = playerSlice.actions;

export default playerSlice.reducer;
