import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';

// class App extends React.Component {
//   render () {
//     return <p> Hello React, Andre!</p>;
//   }
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
