import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../redux/player/Player';
import Player from './Player';
import PlayerCategory from '../playerCategory/PlayerCategory';
import Header from '../header/Header';

const PlayersList = () => {
  const players = useSelector((state) => state.players);
  const [category, setCategegory] = useState('All');
  const dispatch = useDispatch();

  useEffect(() => {
    if (players.length === 0) {
      dispatch(getPlayers());
    }
  }, []);

  const handleCategory = (e) => {
    setCategegory(e);
  };

  const getfilteredList = () => {
    if (category === 'All') {
      return players;
    }
    return players.filter((player) => player.position_name === category);
  };

  const filteredList = useMemo(getfilteredList, [category, players]);

  return (
    <>
      <Header />
      <PlayerCategory handleCategory={handleCategory} />
      <ul className="flex flex-wrap flex-1 justify-around bg-gray-100 py-3">
        {filteredList.map((p) => (
          <li key={p.id} className="border rounded my-2 shadow-2xl p-3 pb-2 bg-white hover:scale-110 transition ease-in-out delay-150">
            <Player
              photo={p.photo}
              name={p.name}
              id={p.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayersList;
