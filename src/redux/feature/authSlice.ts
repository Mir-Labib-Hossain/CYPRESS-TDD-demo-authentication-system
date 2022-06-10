import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  session: string | null;
}
const initialState: AuthState = {
  session: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addSession(state, action: PayloadAction<string>) {
      state.session = action.payload;
    },
    removeSession(state) {
      state.session = null;
    },
  },
});

export const { addSession, removeSession } = authSlice.actions;
export default authSlice.reducer;
