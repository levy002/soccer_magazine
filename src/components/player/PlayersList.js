import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../redux/player/Player';
import Player from './Player';
import logo from '../../image/logo.jpeg';
import PlayerCategory from '../playerCategory/PlayerCategory';

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
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <PlayerCategory handleCategory={handleCategory} />
      <ul>
        {filteredList.map((p) => (
          <li key={p.id}>
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
