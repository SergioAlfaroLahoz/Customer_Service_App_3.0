import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/Form';
import Img from './components/Img';

class App extends Component {

  render() {
    return <div id="app-holder">
      <Form/>
      <Img/>
    </div>
  }
}

export default App;
