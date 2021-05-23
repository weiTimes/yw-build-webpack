import React from 'react';
import ReactDOM from 'react-dom';

import '../../utils/dynamic';

const Study = () => {
  function handleClick() {
    console.log('clicked...');
  }

  return (
    <div onClick={handleClick}>
      <div className='sub-title'>我是学习</div>
    </div>
  );
};

ReactDOM.render(<Study />, document.getElementById('root'));
