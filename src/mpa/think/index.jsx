import React from 'react';
import ReactDOM from 'react-dom';

import '../../utils/dynamic';

const Think = () => {
  function handleClick() {
    console.log('clicked...');
  }

  return (
    <div onClick={handleClick}>
      <div className='sub-title'>我是思考</div>
    </div>
  );
};

ReactDOM.render(<Think />, document.getElementById('root'));
