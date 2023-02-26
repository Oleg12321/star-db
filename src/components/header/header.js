import React from 'react';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">
          StarDB
        </a>
      </h3>
      <button
            onClick={onServiceChange}
            className='btn btn-primary btn-sm'>
              Change Service
      </button>
    </div>
  );
};

export default Header;