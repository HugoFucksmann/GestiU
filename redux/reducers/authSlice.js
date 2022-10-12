import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { authService } from "../services/authService";

const initialState = {
  auth: false,
  token: null,
  users: 0,
  loading: true,
};

const authThuk = createAsyncThunk("auth", async () => {
  console.log("authThukauthThuk !!!!!!!!!!!!!");
  const token = await AsyncStorage.removeItem("token");
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: async (state, action) => {
      await AsyncStorage.removeItem("token");
      state.auth = false;
    },
    isAuth: async (state) => {
      let token = await AsyncStorage.getItem("token");

      state.auth = token !== null;

      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authThuk.fulfilled, (state, action) => {
      const token = action.payload;
      state.auth = token !== null;
      state.loading = false;
    });

    builder.addMatcher(
      authService.endpoints.postAuth.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.auth = true;
      }
    );
  },
});

export const { logout, isAuth } = authSlice.actions;

export default authSlice.reducer;
