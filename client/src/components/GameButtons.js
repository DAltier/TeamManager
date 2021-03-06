import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '../styles/Style';


export default (props) => {
  const { playerId, gameId } = props;
  const [ player, setPlayer ] = useState();


  useEffect(()=> {
    axios.get(`http://localhost:8000/api/player/${playerId}`)
      .then(response => { setPlayer(response.data); })
  },[])


  const onPlayHandler = (statusNum) => {
    console.log("Inside onPlayingHandler");
    const updatedPlayer = {
      ...player,
      status: {
        ...player.status,
        [`game${gameId}`]: statusNum
      }
    }

    axios.put(`http://localhost:8000/api/player/${playerId}`, updatedPlayer)
      .then(response => { setPlayer(updatedPlayer); })
      .catch(err => { console.log("ERROR UPDATING PLAYER") })
  }

  
  return(
    <div>
      <Button style = { { backgroundColor: player && player.status[`game${gameId}`] === 1 ? "#4CAF50" : "" } } 
      onClick = { (e) => onPlayHandler(1) }>Playing</Button>
      <Button style = { { backgroundColor: player && player.status[`game${gameId}`] === -1 ? "#FF0000" : "" } } 
      onClick = { (e) => onPlayHandler(-1) }>Not Playing</Button>
      <Button style = { { backgroundColor: player && player.status[`game${gameId}`] === 0 ? "#FFE600" : "" } } 
      onClick = { (e) => onPlayHandler(0) }>Undecided</Button>
    </div>
  )
}