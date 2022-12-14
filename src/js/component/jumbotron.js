
import React from 'react';

function Jumbotron() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div className='p-5 text-center bg-light'>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        <a className='btn btn-primary' href='' role='button'>
          Call to action
        </a>
      </div>
    </header>
  );
}

export default Jumbotron