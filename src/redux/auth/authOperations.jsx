import { setAuthHeader, clearAuthHeader } from '../services';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-hot-toast';

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error(error.response.data.message));
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log(error(error.response.data.message));
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'users/logoutUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.post('/users/logout');
      clearAuthHeader();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'users/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    setAuthHeader(persistedToken);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

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

// export const subscribeUser = createAsyncThunk(
//   'auth/subscribeUser',
//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/subscribe', credentials);
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       // toast.error(error.response.data.message);
//       console.log(error(error.response.data.message));
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );
