import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/Form';
import Img from './components/Img';
import KindOfProblem from './components/KindOfProblem';
import QForm from './components/QForm';
import ProblemSolved from './components/ProblemSolved';
import ProblemNotSolved from './components/ProblemNotSolved';
import MultipleChoice from './components/MultipleChoice';

class App extends Component {

  constructor(args){
    super(args);
    this.changeWindow = this.changeWindow.bind(this);
    var date = new Date();
    this.state = {
      menu: 'KindOfProblem', //Form
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

      //-------------------------- FORM --------------------------
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
              menu: 'KindOfProblem'
            })
            break;

          case 'Annotation':
            this.setState({
              menu: 'ProblemNotSolved'
            })
            break;
          
          case 'CartridgeAnnotation':
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
            break;
        }
      break;

      //--------------------------KIND OF PROBLEM --------------------------
      case 'KindOfProblem':
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
        }else if(w==='DoorProblems'){
          this.setState({
            menu: 'MultipleChoice',
            window: 'DoorProblems'
          })
        }else if(w==='PartMissing'){
          this.setState({
            menu: 'MultipleChoice',
            window: 'PartMissing'
          })
        }
        break;
      
      //-------------------------- MULTIPLE CHOICE --------------------------
      case 'MultipleChoice':
        if(w==='NotClose'){
          this.setState({
            menu: 'QuestionForm',
            window: 'NotClose',
            question: 'Closed with basket?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='NotOpen'){
          this.setState({
            menu: 'QuestionForm',
            window: 'NotOpen',
            question: 'Right pushing point?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='OpensAlone'){
          this.addLog('Problem', 'Push to open broken or back wires blocking')
          this.setState({
            menu: 'ProblemNotSolved',
          })
        }else if(w==='Vibration'){
          this.setState({
            menu: 'QuestionForm',
            window: 'Vibration',
            question: 'When vibrates?',
            choice1: 'Basket turning',
            choice2: 'Dosing'
          })
        }else if(w==='NotFullyOpen'){
          this.setState({
            menu: 'QuestionForm',
            window: 'NotFullyOpen',
            instruction: 'When guides are new, they are a bit hard and they can get a little stuck at the end. When they have some use, they will be lighter',
            question: 'If pulling harder opens?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='Door'){
          this.setState({
            menu: 'MultipleChoice',
            window: 'PartMissingDoor'
          })
        }else if(w==='CoverOak'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='CoverZebrawood'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='CoverDarkTeak'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='CoverTeak'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='PowerCord'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='Manuals'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='Cartridges'){
          this.setState({
            menu: 'Form',
            window: 'CartridgeAnnotation',
            instruction: 'Which ones?'
          })
        }else if(w==='DiscoveryKit'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='StartingKit'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='WoodenBottle'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='BottleHolder6'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='BottleHolder3'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }else if(w==='ScentCreator'){
          this.setState({
            menu: 'QuestionForm',
            window: 'AnythingElse',
            instruction: '',
            question: 'Anything else?',
            choice1: 'YES',
            choice2: 'NO'
          })
        }
      break;
      
      //-------------------------- QUESTION FORM --------------------------
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

            case 'SmellsPerfume':
              if(w==='Device/Capsules'){
                this.setState({
                  menu: 'Form',
                  window: 'Annotation',
                  instruction: 'Capsules might be broken, identify which ones. Inform we will substitute for new capsules',
                })
              }else{
                this.setState({
                  window: 'SmellsPerfumeBottles',
                  instruction: 'Tight stronger the pump into bottle',
                  question: 'Problem solved?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;

            case 'SmellsPerfumeBottles':
              if(w==='YES'){
                this.setState({
                  menu: 'ProblemSolved'
                })
              }else{
                this.setState({
                  menu: 'Form',
                  window: 'Annotation',
                  instruction: 'Identify which ones. Inform we will substitute for new bottles and pumps'
                })
              }
              break;
            
            case 'NotClose':
              if(w==='YES'){
                this.setState({
                  window: 'NotCloseYes',
                  instruction: '',
                  question: 'Capsules well fitted in the basket?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  window: 'NotCloseNo',
                  instruction: '',
                  question: 'At what point of closure does it get stuck?',
                  choice1: 'START',
                  choice2: 'END'
                })
              }
              break;
            
            case 'NotCloseYes':
              if(w==='YES'){
                this.setState({
                  window: 'NotCloseNo',
                  instruction: '',
                  question: 'At what point of closure does it get stuck?',
                  choice1: 'START',
                  choice2: 'END'
                })
              }else{
                this.setState({
                  window: 'NotCloseYesNo',
                  instruction: 'Please, insert the capsules in their correct position',
                  question: 'Problem solved?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;

            case 'NotCloseYesNo':
              if(w==='YES'){
                this.setState({
                  menu: 'ProblemSolved'
                })
              }else{
                this.setState({
                  window: 'NotCloseNo',
                  instruction: '',
                  question: 'At what point of closure does it get stuck?',
                  choice1: 'START',
                  choice2: 'END'
                })
              }
              break;
            
            case 'NotCloseNo':
              if(w==='START'){
                this.addLog('Problem', 'Doser actuator blocked in down position')
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                  question: 'Can you close the door now?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.addLog('Problem', 'Push to open broken')
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'NotOpen':
              if(w==='YES'){
                this.addLog('Problem', 'Doser actuator blocked in down position or push to open broken or back wire blocking')
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                  question: 'Can you open the door now?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  window: 'NotOpenNo',
                  instruction: 'Please, follow the quick start guide instructions to know how to open the door',
                  question: 'Can you open the door now?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;

            case 'NotOpenNo':
              if(w==='YES'){
                this.setState({
                  menu: 'ProblemSolved'
                })
              }else{
                this.addLog('Problem', 'Doser actuator blocked in down position, push to open broken or back wire blocking')
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                  question: 'Can you open the door now?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;
            
            case 'Vibration':
              if(w==='Basket turning'){
                this.setState({
                  window: 'VibrationTurn',
                  instruction: 'its normal that machine vibrates while is turning',
                  question: 'Machine reads all cartridges ok (cartridges inserted in basket appears as readed in the app after 15 seconds)?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'its normal that machine vibrates while is dosing',
                  question: 'Perfume results are correct (quantity, smells...)?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;

            case 'VibrationTurn':
              if(w==='YES'){
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'its normal that machine vibrates while is dosing',
                  question: 'Perfume results are correct (quantity, smells...)?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }else{
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'NotFullyOpen':
              if(w==='YES'){
                this.setState({
                  menu: 'ProblemSolved'
                })
              }else{
                this.addLog('Problem', 'Maybe doser actuator is blocked in down position')
                this.setState({
                  window: 'FinalQuestion',
                  instruction: 'Switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                  question: 'Can you open the door now?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;
          
            case 'AnythingElse':
              if(w==='YES'){
                this.setState({
                  menu: 'MultipleChoice',
                  window: 'PartMissing'
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
            <Form window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog} instruction={this.state.instruction}/>
            <Img window={this.state.window}/>
          </div>
        )
      
      case 'KindOfProblem':
        return(
          <div className="app-holder">
              <KindOfProblem window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
          </div>
        )
      
      case 'MultipleChoice':
        return(
          <div className="app-holder">
              <MultipleChoice window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
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
            <ProblemNotSolved window='ProblemNotSolved' data={this.state.data} addLog={this.addLog}/>
            <Img window='ProblemNotSolved'/>
          </div>
        )
    }
  }
}

export default App;
