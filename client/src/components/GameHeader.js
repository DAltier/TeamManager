import React from 'react';
import { Link } from '@reach/router';
import { Header } from '../styles/Style'

export default props => {

  return (
    <Header>
      <Link to = "/status/game/1"><h3>Game1</h3></Link>
      <h3> | </h3>
      <Link to = "/status/game/2"><h3>Game 2</h3></Link>
      <h3> | </h3>
      <Link to = "/status/game/3"><h3>Game 3</h3></Link>
    </Header>
  )
}