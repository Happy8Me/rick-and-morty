import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getLocations = createAsyncThunk('locations/getLocations', async ({page, debouncedName, debouncedType, debouncedDimention}) => {
    let search = '';   
    search += page ? `page=${page}` : '';
    search += debouncedName ? `&name=${debouncedName}` : '';
    search += debouncedType ? `&type=${debouncedType}` : '';
    search += debouncedDimention ? `&dimension=${debouncedDimention}` : '';     

    return fetch(`https://rickandmortyapi.com/api/location/?${search}`).then(res => res.json())
  })

const locationsReducer = createSlice({
    name: 'locations',
    initialState: {
        locations: {},
        status: null 
    },
    extraReducers: {
       [getLocations.pending]: (state, action) => {
           state.status = 'loading'
       },
       [getLocations.fulfilled]: (state, {payload}) => {
        state.locations = payload
        state.status = 'success'
        },
        [getLocations.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
});

export default locationsReducer.reducer;