import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayers } from '../../redux/player/Player';

const PlayerDetail = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    if (players.length === 0) {
      dispatch(getPlayers());
    }
  }, []);

  const { id } = useParams();

  return (
    <>
      {players.filter((player) => player.id === parseInt(id, 10)).map((p) => (
        <div key={p.id}>
          <img src={p.photo} alt="Player" />
          <p>{p.name}</p>
          <p>{p.flag}</p>
          <p>{p.age}</p>
        </div>
      ))}
    </>
  );
};

// PlayerDetail.propTypes = {
//   name: propTypes.string.isRequired,
//   age: propTypes.number.isRequired,
//   country: propTypes.string.isRequired,
//   photo: propTypes.string.isRequired,
// };

export default PlayerDetail;
