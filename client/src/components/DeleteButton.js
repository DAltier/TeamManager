import React from 'react';
import axios from 'axios';
import { DelButton } from '../styles/Style';


export default props => {
  const onClickDestroy = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/player/${props.playerId}`)
    .then(res => {
      if(window.confirm(`Are you sure you want to delete this Player?`)){
        props.successCallback();
      }
    })
  }

  
  return (
    <DelButton onClick = { onClickDestroy } >Delete</DelButton>
  )
}