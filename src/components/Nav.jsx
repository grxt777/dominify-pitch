import React from 'react';

const Nav = () => {
  return (
    <nav>
      <a className="nav-logo" href="#">DOMINIFY</a>
      <ul className="nav-links">
        <li><a href="#problem">Problem</a></li>
        <li><a href="#solution">Solution</a></li>
        <li><a href="#traction">Traction</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a className="nav-cta" href="#contact">Get in touch →</a>
    </nav>
  );
};

export default Nav;
