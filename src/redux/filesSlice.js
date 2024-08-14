import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for fetching files
export const fetchFiles = createAsyncThunk('files/fetchFiles', async (projectId) => {
    const response = await axios.get(`https://excentrix-project2639-2.onrender.com/api/files/${projectId}`);
    return response.data;
});

const filesSlice = createSlice({
    name: 'files',
    initialState: { items: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiles.fulfilled, (state, action) => {
                state.items = action.payload;
            });
    },
});

export default filesSlice.reducer;
