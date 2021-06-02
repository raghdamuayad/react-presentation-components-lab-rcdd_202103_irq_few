import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>

    <SimplerComponent handleClick={() => console.log('Happy as can be.')} />
  </div>,
  document.getElementById('root')
);
