import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/Form';
import Img from './components/Img';
import KindOfProblem from './components/KindOfProblem';
import QForm from './components/QForm';
import ProblemSolved from './components/ProblemSolved';

class App extends Component {

  constructor(args){
    super(args);
    this.changeWindow = this.changeWindow.bind(this);
    var date = new Date();
    this.state = {
      menu: 'Form', //Form
      window: 'Login', //Login
      data: {Date: date},
      instruction: '',
      question: 'Question 1',
      choice1: 'YES',
      choice2: 'NO'
    }
  }

  addLog = (title, description) => {
    this.state.data[title]=description;
    this.setState({});
  }

  changeWindow = (w) => {
    switch (this.state.menu) {

      case 'Form':
        switch (this.state.window){
          case 'Login':
            this.setState({
              window: 'SerialNumber'
            })
            break;

          case 'SerialNumber':
            this.setState({
              window: 'UserInformation'
            })
            break;  

          case 'UserInformation':
            this.setState({
              menu: 'MultipleChoice'
            })
            break;
        }
      break;

      case 'MultipleChoice':
        if(w==='ErrorCode'){
          this.setState({
            menu: 'QuestionForm',
            window: 'ErrorCode',
            question: 'Colour/Code?',
            choice1: 'RED',
            choice2: 'PURPLE'
          })
        }else{
          console.log("no ok");
        }
        break;
      
      case 'QuestionForm':
        switch (this.state.window){
          case 'ErrorCode':
            if(w==='RED'){
              this.setState({
                window: 'ErrorCodeRed',
                question: 'Can you open the door?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'ErrorCodePurple',
                question: 'Can you open the door?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;
          
          case 'ErrorCodeRed':
            if(w==='YES'){
              this.setState({
                window: 'ErrorCodeRedYes',
                instruction: 'Follow the instructions to unblock feeder jam. Then switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'ErrorCodeRedNo',
                instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'ErrorCodeRedYes':
            if(w==='YES'){
              this.setState({
                menu: 'ProblemSolved',
              })
            }else{
              this.setState({
                menu: 'ProblemNotSolved'
              })
            }
            break;

          case 'ErrorCodeRedNo':
            if(w==='YES'){
              this.setState({
                window: 'ErrorCodeRedYes',
                instruction: 'Follow the instructions to unblock feeder jam. Then switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                menu: 'ProblemNotSolved'
              })
            }
            break;

          case 'ErrorCodePurple':
            if(w==='YES'){
              this.setState({
                window: 'ErrorCodePurpleYes',
                instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'ErrorCodePurpleYes',
                instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Can you open the door now?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'ErrorCodePurpleYes':
            if(w==='YES'){
              this.setState({
                menu: 'ProblemSolved',
              })
            }else{
              this.setState({
                menu: 'ProblemNotSolved'
              })
            }
            break;

        }

      default: 
        break;
    }
  }

  //<Redirect exact from="/" to="/Login"/>
  //<p>{JSON.stringify(this.state)}</p>
  render() {
    switch(this.state.menu){
      case 'Form':
        return(
          <div className="app-holder">
            <Form window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
            <Img window={this.state.window}/>
          </div>
        )
      
      case 'MultipleChoice':
        return(
          <div className="app-holder">
              <KindOfProblem window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
          </div>
        )

      case 'QuestionForm':
          return(
            <div className="app-holder">
                <QForm instruction={this.state.instruction} question={this.state.question} choice1={this.state.choice1} choice2={this.state.choice2} window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
                <Img window={this.state.window}/>
            </div>
          )

      case 'ProblemSolved':
            return(
              <div className="app-holder">
                  <ProblemSolved data={this.state.data} addLog={this.addLog}/>
                  <Img window={this.state.menu}/>
              </div>
            )
      
      case 'ProblemNotSolved':
        return(
          <div className="app-holder">
            <Form window='ProblemNotSolved' data={this.state.data} addLog={this.addLog}/>
            <Img window='ProblemNotSolved'/>
          </div>
        )
    }
  }
}

export default App;
