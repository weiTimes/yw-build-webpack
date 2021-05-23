import React from 'react';
import ReactDOM from 'react-dom';

import '../../utils/dynamic';

const About = () => {
  function handleClick() {
    console.log('clicked...');
  }

  return (
    <div onClick={handleClick}>
      <div className='sub-title'>我是关于</div>
    </div>
  );
};

ReactDOM.render(<About />, document.getElementById('root'));
