import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUser,
  // subscribeUser,
} from './authOperations';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: null,
    avatarUrl: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // registerUser

    [registerUser.pending](state, _) {
      state.isRefreshing = true;
      state.isLoading = true;
    },

    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },

    [registerUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // loginUser

    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },

    [loginUser.pending](state, _) {
      state.isLoading = true;
    },

    [loginUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // logoutUser
    [updateUser.pending](state, _) {
      state.isLoading = true;
    },

    [logoutUser.fulfilled](state) {
      state.user = { firstName: null, lastName: null, email: null };
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.error = null;
    },

    [logoutUser.rejected](state, action) {
      state.error = action.payload;
    },

    // refreshUser

    [refreshUser.pending](state, action) {
      state.isRefreshing = true;
      state.isLoading = true;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },

    [refreshUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // updateUser
    [updateUser.pending](state, _) {
      state.isRefreshing = true;
      state.isLoading = true;
    },

    [updateUser.fulfilled](state, action) {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.avatarUrl = action.payload.avatarUrl;
      state.isRefreshing = false;
      state.isLoading = false;
      state.error = null;
    },

    [updateUser.rejected](state, action) {
      state.error = action.payload;
      state.isRefreshing = false;
      state.isLoading = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['refreshToken'],
};

export const persistedUsersReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
