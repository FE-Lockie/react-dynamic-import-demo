import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <p>{props.location.pathname}</p>
      <Link to={'/mine'}>to mine</Link>
    </div>
  )
}
