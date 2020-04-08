import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/Form';
import Img from './components/Img';
import KindOfProblem from './components/KindOfProblem';
import QForm from './components/QForm';
import ProblemSolved from './components/ProblemSolved';
import ProblemNotSolved from './components/ProblemNotSolved';

class App extends Component {

  constructor(args){
    super(args);
    this.changeWindow = this.changeWindow.bind(this);
    var date = new Date();
    this.state = {
      menu: 'MultipleChoice', //Form
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
        }else if(w==='App'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AndroidIOS',
            question: 'What is the operating system of your mobile phone?',
            choice1: 'Android',
            choice2: 'iOS/Apple'
          })
        }else if(w==='NotWorking'){
          this.setState({
            menu: 'QuestionForm',
            window: 'NotWorking',
            question: 'Any noise or any light?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='Noise'){
          this.setState({
            menu: 'QuestionForm',
            window: 'Noise',
            question: 'Device works?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='Smells'){
          this.setState({
            menu: 'QuestionForm',
            window: 'Smells',
            question: 'Which kind?',
            choice1: 'Perfume',
            choice2: 'Burnt'
          })
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

          case 'FinalQuestion':
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
                window: 'FinalQuestion',
                instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'FinalQuestion',
                instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                question: 'Can you open the door now?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'NotWorking':
            if(w==='YES'){
              this.setState({
                window: 'NotWorkingLights',
                instruction: '',
                question: 'Lights on?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'NotWorkingSwitch',
                instruction: 'Please, check if cable is connected properly and switch is in on position (instructions in starting guide)',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;
          
          case 'NotWorkingSwitch':
            if(w==='YES'){
              this.setState({
                menu: 'ProblemSolved',
              })
            }else{
              this.setState({
                window: 'FinalQuestion',
                instruction: 'Try connecting the machine to a different plug',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;
          
          case 'NotWorkingLights':
            if(w==='YES'){
              this.setState({
                window: 'NotWorkingLightsColour',
                instruction: '',
                question: 'Colour of lights?',
                choice1: 'Red/Purple',
                choice2: 'Blue/White'
              })
            }else{
              this.setState({
                menu: 'ProblemNotSolved'
              })
            }
            break;

          case 'NotWorkingLightsColour':
            if(w==='Red/Purple'){
              this.setState({
                window: 'ErrorCode',
                question: 'Colour/Code?',
                choice1: 'RED',
                choice2: 'PURPLE'
              })
            }else{
              this.setState({
                window: 'NotWorkingLightsColourBW',
                question: 'Colour/Code?',
                choice1: 'BLUE',
                choice2: 'WHITE'
              })
            }
            break;

          case 'NotWorkingLightsColourBW':
            if(w==='BLUE'){
              this.setState({
                window: 'NotWorkingLightsColourBlue',
                question: 'Can you pair your Scent Creator with the App?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'NotWorkingLightsColourWhite',
                question: 'Does the scent creator print the formula sent?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;
          
          case 'NotWorkingLightsColourBlue':
            if(w==='YES'){
              this.setState({
                window: 'NotWorkingLightsColourBluePaired',
                instruction: 'Pair your Scent Creator with the App',
                question: 'Bottle placed?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({ //Completar 
                window: '',
                instruction: 'Follow the instructions of the starting guide to pair the Scent Creator with the App',
                question: 'App paired after instructions?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'NotWorkingLightsColourBluePaired':
            if(w==='YES'){
              this.setState({
                window: 'FinalQuestion',
                instruction: 'Sensor does not recognize bottle, try with another bottle or clean it, make sure the Scent Creator is in a well-lit environment',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }else{
              this.setState({
                window: 'NotWorkingLightsColourBluePairedBottle',
                instruction: 'Insert the bottle',
                question: 'Has the light changed to white?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'NotWorkingLightsColourBluePairedBottle':
            if(w==='YES'){
              this.setState({
                menu: 'ProblemSolved',
              })
            }else{
              this.setState({
                window: 'FinalQuestion',
                instruction: 'Sensor does not recognize bottle, try with another bottle or clean it, make sure the Scent Creator is in a well-lit environment',
                question: 'Has the problem been solved?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'NotWorkingLightsColourWhite':
            if(w==='YES'){
              this.setState({
                menu: 'ProblemSolved'
              })
            }else{
              this.setState({
                window: 'FinalQuestion',
                instruction: 'Turn off the Scent Creator, wait for 5 seconds and turn it on. Force close the Alchemist Atelier App and then, open it. Make sure the Scent Creator has the cartridges selected with enough perfume quantity. Try to reconnect and send a new formula.',
                question: 'Does the scent creator print the formula sent?',
                choice1: 'YES',
                choice2: 'NO'
              })
            }
            break;

          case 'Noise':
            if(w==='YES'){
              this.setState({
                window: 'NoiseWorks',
                question: 'When does the noise appear?',
                choice1: 'While blending',
                choice2: 'Continous'
              })
            }else{
              this.setState({
                window: 'NoiseNotWorks',
                question: 'When does the noise appear?',
                choice1: 'On switching ON',
                choice2: 'Other'
              })
            }
            break;

            case 'NoiseWorks':
              if(w==='While blending'){
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'It may be vibrations or door movement caused of the engines',
                  question: 'Perfume results are correct (quantity, smells...)?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'Is power cord well placed? If not, place it properly',
                  question: 'Problem solved?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;

            case 'NoiseNotWorks':
              if(w==='On switching ON'){
                this.setState({
                  window: 'NoiseNotWorksLights',
                  question: 'Lights in red/purple?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'NoiseNotWorksLights':
              if(w==='YES'){
                this.setState({
                  window: 'ErrorCode',
                  question: 'Colour/Code?',
                  choice1: 'RED',
                  choice2: 'PURPLE'
                })
              }else{
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'Smells':
              if(w==='Perfume'){
                this.setState({
                  window: 'SmellsPerfume',
                  question: 'From where?',
                  choice1: 'Device/Capsules',
                  choice2: 'Bottles'
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
