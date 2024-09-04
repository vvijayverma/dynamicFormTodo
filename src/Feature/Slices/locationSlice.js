import { createSlice, nanoid } from '@reduxjs/toolkit';

const locationSlice = createSlice({
  name: 'location',
  initialState: [],
  reducers: {
    addLocation: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title
          }
        };
      },
    },
    updateLocation(state, action) {
      const { id, title } = action.payload;
      const existingLocation = state.find(location => location.id === id);
      if (existingLocation) {
        existingLocation.title = title;
      }
    },
    deleteLocation(state, action) {
      const postId = action.payload;
      return state.filter(post => post.id !== postId);
    },
  },
});

export const { addLocation, updateLocation, deleteLocation } = locationSlice.actions;

export default locationSlice.reducer;