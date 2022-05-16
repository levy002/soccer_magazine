import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import playerReducer from './player/Player';

const reducer = combineReducers({
  players: playerReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
