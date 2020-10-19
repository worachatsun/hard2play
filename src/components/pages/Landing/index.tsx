import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  return (
    <div>
      <div>
        <Link to='/twister'>
          <button>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
