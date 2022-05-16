import axios from 'axios';

const initialState = [];
const GET_PLAYERS = 'GET_PLAYERS';

export const getPlayersAction = (data) => ({
  type: GET_PLAYERS,
  payload: data,
});

export const getPlayers = () => async (dispatch) => {
  // await axios({
  //   method: 'GET',
  //   url: 'https://sportscore1.p.rapidapi.com/players',
  //   params: { page: '1' },
  //   headers: {
  //     'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com',
  //     'X-RapidAPI-Key': 'b2defd825amsh9aed4fd86bf6a5cp14e615jsna4e01209f545',
  //   },
  // })
  //   .then((response) => {
  //     console.log(response.data.data);
  //     dispatch(getPlayersAction(response.data.data));
  //   });

  await axios({
    method: 'GET',
    url: 'http://localhost:8000/data',
  })
    .then((response) => {
      dispatch(getPlayersAction(response.data));
    });
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return [...action.payload];

    default:
      return state;
  }
};

export default playerReducer;
