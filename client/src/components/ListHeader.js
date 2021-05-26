import React from 'react';
import { Link } from '@reach/router';
import { Header } from '../styles/Style'


export default props => {
  return (
    <Header>
      <Link to = "/players/list"><h3>List</h3></Link> 
      <h3> | </h3>
      <Link to = "/players/addplayer"><h3>Add Player</h3></Link>
    </Header>
  )
}