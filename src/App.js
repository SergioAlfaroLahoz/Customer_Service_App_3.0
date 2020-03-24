import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/Form';
import Img from './components/Img';
import PdfGenerate from './components/PdfGenerate';

//Images
import SerialNumberLocation from './img/SerialNumberLocation.png'

class App extends Component {

  render() {
    return <div class="app-holder">
      <Form/>
      <Img/>
      <PdfGenerate/>
    </div>
  }
}

export default App;
