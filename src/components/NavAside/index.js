import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';

const NavAside = () => {
  return (
    <C.Container>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/contacts">Contacts</Link>
      </div>
    </C.Container>
  )
}

export default NavAside