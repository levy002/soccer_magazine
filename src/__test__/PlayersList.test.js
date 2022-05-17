import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import PlayersList from '../components/player/PlayersList';
import store from '../redux/configureStore';

describe('test PlayersList component', () => {
  test('check whether the component renders correctly', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <PlayersList />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
