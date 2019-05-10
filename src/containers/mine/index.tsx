import React from 'react';
import { Link } from 'react-router-dom';

export default function Mine(props) {
  return (
    <div>
      <p>{props.location.pathname}</p>
      <Link to={'/home'}>to home</Link>
    </div>
  )
}
