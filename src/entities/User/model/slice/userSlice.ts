import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { userInfoAPI } from "../../api/userInfo";
import axios from "axios";


export const fetchUser = createAsyncThunk<User | null, void, { rejectValue: string }>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return rejectWithValue("Token is null or undefined");
      }
      const response = await userInfoAPI.fetchUser(token);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 403) {
          localStorage.removeItem("token");
         window.location.reload()

          return rejectWithValue("403 Forbidden");
        }
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
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
