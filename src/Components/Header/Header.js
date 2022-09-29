import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header> 
      <h3>To-Do List</h3>
      <div>
        <NavLink className='user-link' to='/auth/sign-in'>Sign In</NavLink>
        <div>

        </div>
        <NavLink className='user-link' to='/auth/sign-up'>Sign Up</NavLink>
      </div>
    </header>
  );
}
