import { configureStore } from '@reduxjs/toolkit';
import myWatchListReducer from '../containers/myWatchList/myWatchListSlice';
import characterReducer from '../containers/characters/charactersSlice';
import episodesReducer from '../containers/episodes/episodesSlice';
import locationsReducer from '../containers/locations/locationsSlice';

export const store = configureStore({
  reducer: {
    myWatchList: myWatchListReducer,
    characters: characterReducer,
    episodes: episodesReducer,
    locations: locationsReducer
  },
});
