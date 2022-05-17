import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import playerReducer, { getPlayersAction } from '../../../redux/player/Player';

const initialState = [];

const reducer = combineReducers({
  playerReducer,
});

const store = configureStore(
  { reducer },
  applyMiddleware(thunk),
);

describe('playerReducer', () => {
  it('should return initial state', () => {
    expect(store.getState().playerReducer).toEqual(initialState);
  });

  it('should return playerArray', () => {
    const playerArray = [{
      id: 202,
      name: 'Abbas',
      age: 24,
    }];

    store.dispatch(getPlayersAction(playerArray));
    expect(store.getState().playerReducer).toEqual(playerArray);
  });
});
