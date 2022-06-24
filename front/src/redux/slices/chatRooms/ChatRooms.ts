import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatRoomsInitialStateInterface } from "./Models";

const initialState: ChatRoomsInitialStateInterface = {};

const chatRoomsSlice = createSlice({
  name: "chatRooms",
  initialState,
  reducers: {},
});
export const {} = chatRoomsSlice.actions;
export default chatRoomsSlice.reducer;
