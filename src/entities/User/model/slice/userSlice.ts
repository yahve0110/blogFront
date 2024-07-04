import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { userInfoAPI } from "../../api/userInfo";

export const fetchUser = createAsyncThunk<User, void>(
  "user/fetchUser",
  async () => {
    const token = localStorage.getItem("token");
    const response = await userInfoAPI.fetchUser(token);
    return response;
  }
);

interface UsersState {
  entities: User | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  entities: null,
  loading: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<User>) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setData } = userSlice.actions;

export default userSlice.reducer;
