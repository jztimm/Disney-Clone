import { createSlice } from '@reduxjs/toolkit'

// Start with a blank state
const initialState = {
  name: "",
  email: "",
  photo: "",
};

// User logs in
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: 
  {
    // When user logs in, remeber these details
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    // When user logs out, forget
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;