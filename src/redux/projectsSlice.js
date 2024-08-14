import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for fetching projects
export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await axios.get('https://excentrix-project2639-2.onrender.com/api/projects');
    return response.data;
});

const projectsSlice = createSlice({
    name: 'projects',
    initialState: { items: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.items = action.payload;
            });
    },
});

export default projectsSlice.reducer;
