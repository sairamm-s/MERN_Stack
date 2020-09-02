import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const hasToken = localStorage.getItem('auth');
  const logout = () => {
    localStorage.clear();
  };
  if (hasToken) {
    return (
      <nav className='navbar navbar-expand navbar-light bg-navbar px-5 py-2'>
        Dev's Den
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/articles'>
                Blogs <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/add'>
                Add Article
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' onClick={logout} path='/login'>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className='navbar navbar-expand navbar-light bg-navbar px-5 py-2'>
        Dev's Den
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/articles'>
                Blogs <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                Register{' '}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};
