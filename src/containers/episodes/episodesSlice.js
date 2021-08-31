import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getEpisodes = createAsyncThunk('episodes/getEpisodes', async ({page, debouncedName}) => {
    let search = '';   
    search += page ? `page=${page}` : '';
    search += debouncedName ? `&name=${debouncedName}` : '';     

    return fetch(`https://rickandmortyapi.com/api/episode/?${search}`).then(res => res.json())
  })

const episodesReducer = createSlice({
    name: 'episodes',
    initialState: {
        episodes: {},
        status: null
    },
    extraReducers: {
        [getEpisodes.pending]: (state, action) => {
           state.status = 'loading'
        },
        [getEpisodes.fulfilled]: (state, {payload}) => {
            state.episodes = payload
            state.status = 'success'
        },
        [getEpisodes.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
});

export default episodesReducer.reducer;