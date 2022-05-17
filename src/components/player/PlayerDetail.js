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
        <div key={p.id} className="flex flex-col ">
          <img src={p.photo} alt="Player" className="" />
          <div className="flex flex-col bg-gray-100">
            <div className="flex justify-between p-3">
              <p>Name</p>
              <p className="text-purple-700">{p.name}</p>
            </div>

            <div className="flex justify-between p-3 bg-white">
              <p>Nationality</p>
              <p className="text-purple-700">{p.flag}</p>
            </div>

            <div className="flex justify-between p-3">
              <p>Age</p>
              <p className="text-purple-700">{p.age}</p>
            </div>

            <div className="flex justify-between p-3 bg-white">
              <p>Height</p>
              <p className="text-purple-700">{p.height}</p>
            </div>

            <div className="flex justify-between p-3">
              <p>Rating</p>
              <p className="text-purple-700">{p.rating}</p>
            </div>

            <div className="flex justify-between p-3 bg-white">
              <p>Position</p>
              <p className="text-purple-700">{p.position_name}</p>
            </div>

            <div className="flex justify-between p-3">
              <p>Club</p>
              <div className="flex justify-center items-center gap-2">
                <p className="text-purple-700">{p.main_team.name_full}</p>
                <img src={p.main_team.logo} alt="Team Logo" className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlayerDetail;
