import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCharactes = createAsyncThunk('characters/getCharactes', async ({page, status, gender, debouncedSpecies}) => {

    let search = '';   
    search += page ? `page=${page}` : '';
    search += status ? `&status=${status}` : '';
    search += gender ? `&gender=${gender}` : '';
    search += debouncedSpecies ? `&species=${debouncedSpecies}` : '';     

    return fetch(`https://rickandmortyapi.com/api/character/?${search}`).then(res => res.json())
  })

const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        characters: {},
        status: null
    },
    extraReducers: {
       [getCharactes.pending]: (state, action) => {
           state.status = 'loading'
       },
       [getCharactes.fulfilled]: (state, {payload}) => {
        state.characters = payload
        state.status = 'success'
        },
        [getCharactes.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
});

export default charactersSlice.reducer;