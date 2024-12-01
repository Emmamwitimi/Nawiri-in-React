import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch users from an API (Replace with your actual API)
export const getUsers = createAsyncThunk('http://127.0.0.1:5000/users', async () => {
  const response = await axios.get('http://127.0.0.1:5000/users'); // Replace with your actual API endpoint
  return response.data;
});

// Initial state with mock data
const initialState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      role: 'admin',
      joinedDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'active',
      role: 'user',
      joinedDate: '2024-02-01'
    }
  ],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

// Create the slice
const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.users.length + 1,
        ...action.payload,
        joinedDate: new Date().toISOString().split('T')[0]
      };
      state.users.push(newUser);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch users (getUsers)
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Export actions and reducer
export const { addUser, updateUser, deleteUser } = adminSlice.actions;
export default adminSlice.reducer;
