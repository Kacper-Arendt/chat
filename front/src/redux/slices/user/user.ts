import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, LoginPayload } from "redux/slices/user/Models";

const initialState = {
  isLogged: false,
} as InitialState;

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<LoginPayload>) => {
      const { id, username } = action.payload;

      state.isLogged = true;
      state.id = id;
      state.username = username;
    },
  },
});
export const { userLogin } = counterSlice.actions;
export default counterSlice.reducer;
