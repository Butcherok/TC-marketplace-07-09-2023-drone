import { setAuthHeader, clearAuthHeader } from '../services';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-hot-toast';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/register', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      // const res =
      await axios.post('/users/logout');
      clearAuthHeader();
      // return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;
    // console.log(state);

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.post('/users/refresh');
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// export const currentUser = createAsyncThunk(
//   'auth/currentUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     console.log(persistedToken);
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('No valid token');
//     }
//     setAuthHeader(persistedToken);
//     try {
//       const res = await axios.get('/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
