import React from 'react';
import User from './User';

function Header() {
  return (
    <header className='flex'>
      <div>
        <p>About</p>
        <p>Store</p>
      </div>
      <div>
        <p>Gmail</p>
        <p>Images</p>
        <User />
      </div>
    </header>
  );
}

export default Header;