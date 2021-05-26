import React, { useEffect } from 'react';
import axios from 'axios';
import GameButtons from './GameButtons';
import '../styles/Table.module.css'
import GameHeader from './GameHeader';


export default props => {
  const {player, setPlayer, gameId} = props;


  useEffect(() => {
    axios.get(`http://localhost:8000/api/player`)
    .then(res => setPlayer(res.data));
  }, [])


  return (
    <div>
      <h1>Player Status - Game {gameId}</h1>
      <GameHeader/>
      <div>
        <table>
          <tbody>
            <tr>
              <td><h2>Players</h2></td>
              <td><h2>Actions</h2></td>
            </tr>
            { player.map((play, idx ) => 
              <tr key = { idx }>
                <td>{ play.name }</td>
                <td>
                  <GameButtons playerId = { play._id } gameId = { gameId }/>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}