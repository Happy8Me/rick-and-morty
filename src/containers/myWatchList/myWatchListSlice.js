import { createSlice } from '@reduxjs/toolkit';

const myWatchListSlice = createSlice({
    name: "episodes",
    initialState: 
         [
            {
                "id": 1,
                "title": "Lawnmower Dog",
                "completed": false
            },
            {
                "id": 2,
                "title": "Rixty Minutes",
                "completed": false
            },
            {
                "id": 3,
                "title": "Something Ricked This Way Comes",
                "completed": false
            }
        ], 
  
    reducers: {
        addEpisode: (state, action) => { 
            const newEpisode = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            return [newEpisode, ...state]
        },
        toggleEpisode: (state, action) => {
            const index = state.findIndex( (episode) => { return episode.id === action.payload.id} );
            state[index].completed = action.payload.completed;
        },
        deleteEpisode: (state, action) => {
            const index = state.findIndex( (episode) => { return episode.id === action.payload.id} );
            state.splice(index, 1)
        },
        clearAllCompletedEpisodes: (state) => {        
            return state.filter(episode => episode.completed === false)
        },
        toggleAllEpisodes: (state) => {
            const allCompleted = state.every(episode => {return episode.completed === true});
            if(allCompleted) {
                state.map(episode => episode.completed = false)
            } else {
                state.map(episode => episode.completed = true)
            }
        }
    }
});

export const { 
    addEpisode, 
    toggleEpisode, 
    deleteEpisode,
    toggleAllEpisodes, 
    clearAllCompletedEpisodes,
} = myWatchListSlice.actions;

export default myWatchListSlice.reducer;

