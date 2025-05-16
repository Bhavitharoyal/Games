import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

const Nav = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="nav-container">
      <h2>Welcome to the Dashboard!</h2>
      <nav>
        <ul>
        <div className='up'>
          <li><Link to="/game">Play 7 Up 7 Down</Link></li></div><div className='expense'>
          <li><Link to="/tracker">Expense Tracker</Link></li></div>
          <div className='bmi'>
          <li><Link to="/BMI">BMI Calculator</Link></li></div><div className='bo'>
          <li><Link to="/Stop">Stop Watch</Link></li></div>
        </ul>
      </nav>
      <div className='bu'>
      <button onClick={handleLogout}>Logout</button></div>
    </div>
  );
};

export default Nav;
