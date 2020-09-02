import React from 'react';

export const Footer = () => {
  return (
    <div className='mt-5 bg-footer text-center'>
      <span className='mt-4 text-light'>
        &copy; {new Date().getFullYear()} All rights reserved{' '}
      </span>
    </div>
  );
};
