import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/EN/Form';
import Img from './components/EN/Img';
import KindOfProblem from './components/EN/KindOfProblem';
import QForm from './components/EN/QForm';
import QForm3Choice from './components/EN/QForm3Choice';
import ProblemSolved from './components/EN/ProblemSolved';
import ProblemNotSolved from './components/EN/ProblemNotSolved';
import MultipleChoice from './components/EN/MultipleChoice';
import AssignTo from './components/EN/AssignTo';
import OtherQ from './components/EN/OtherQ';
import Back from './components/EN/Back';
import Version from './components/EN/Version';

class AppEN extends Component {

  constructor(args){
    super(args);
    this.changeWindow = this.changeWindow.bind(this);
    var date = new Date();
    this.state = {
      menu: 'Form', //Form //KindOfProblem
      window: 'Login', //Login
      information: {Date: date},
      data: {},
      instruction: '',
      question: 'Question 1',
      choice1: 'YES',
      choice2: 'NO',
      choice3: '',
      name: '',
      wCounter: 0,
      register: [],
      flag: false,
    };
  }

  addInformation = (title, description) => {
    this.state.information[title]=description;
    this.setState({});
  }

  addLog = (title, description) => {
    this.state.data[title]=description;
    this.setState({});
  }

  addRegister = () => {
    this.state.wCounter ++;

    const newRegister = {
      menu: this.state.menu,
      window: this.state.window,
      instruction: this.state.instruction,
      question: this.state.question,
      choice1: this.state.choice1,
      choice2: this.state.choice2,
      choice3: this.state.choice3,
      name: this.state.name
    }
    this.setState({
      register: [...this.state.register, newRegister]
    });
  }

  //Back function, goes back one window
  /*
  back = () => {
    var l = this.state.register.length
    this.setState({
      menu: this.state.register[l-1].menu,
      window: this.state.register[l-1].window,
      instruction: this.state.register[l-1].instruction,
      question: this.state.register[l-1].question,
      choice1: this.state.register[l-1].choice1,
      choice2: this.state.register[l-1].choice2,
      choice3: this.state.choice3,
      name: this.state.register[l-1].name
    })
    if(this.state.register[l-1].menu==='KindOfProblem'){
      this.state.flag = false;
    }
    this.state.register.pop();
    this.setState({})
  }
  */

  //Back function 2, goes back to KindOfProblem and resets log
  back = () => {
    this.setState({
      menu: 'KindOfProblem',
      window: '',
      instruction: '',
      question: '',
      choice1: '',
      choice2: '',
      choice3: '',
      name: '',
      flag: false,
      data: {}
    })
  }

  changeWindow = (w) => {
    if(this.state.menu==='KindOfProblem'){
      this.state.flag = true;
    }
    this.addRegister();
    if(w==='Other'){
      this.setState({
        menu: 'Other'
      })
    }else{
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

            case 'WCartridgeAnnotation':
              this.setState({
                menu: 'QuestionForm',
                window: 'WAnythingElse',
                instruction: '',
                question: 'Anything else?',
                choice1: 'YES',
                choice2: 'NO'
              })
              break;

            case 'AnnotationNext':
              this.setState({
                menu: 'ProblemSolved'
              })
              break;

            case 'TrackingNumber':
              this.setState({
                menu: 'MultipleChoice',
                window: 'Delivery'
              })
              break;

            case 'VersionAnnotation':
              this.setState({
                menu: 'MultipleChoice',
                window: 'AppChoice'
              })
              break;
          }
        break;

        //--------------------------KIND OF PROBLEM --------------------------
        case 'KindOfProblem':
          if(w==='ErrorCode'){
            this.setState({
              menu: 'MultipleChoice',
              window: 'ErrorCode',
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
          }else if(w==='Delivery'){
            this.setState({
              menu: 'Form',
              window: 'TrackingNumber'
            })
          }else if(w==='PerfumeResults'){
            this.setState({
              menu: 'QuestionForm3Choice',
              window: 'PerfumeResults',
              question: 'Which is the problem?',
              choice1: 'Smell of perfume result',
              choice2: 'Not right volume',
              choice3: 'Allergic reaction on skin'
            })
          }else if(w==='Staints'){
            this.setState({
              menu: 'QuestionForm3Choice',
              window: 'Staints',
              question: 'Where?',
              choice1: 'Basket',
              choice2: 'Capsule',
              choice3: 'Base of device'
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
          }else if(w==='WDoor'){
            this.setState({
              menu: 'MultipleChoice',
              window: 'WPartMissingDoor'
            })
          }else if(w==='WCoverOak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WCoverZebrawood'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WCoverDarkTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WCoverTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WPowerCord'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WManuals'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WCartridges'){
            this.setState({
              menu: 'Form',
              window: 'WCartridgeAnnotation',
              instruction: 'Which ones?'
            })
          }else if(w==='WDiscoveryKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WStartingKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WWoodenBottle'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WBottleHolder6'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WBottleHolder3'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WScentCreator'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: 'Anything else?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='ErrorCodeRed'){
            this.setState({
              menu: 'QuestionForm',
              instruction: '',
              window: 'ErrorCodeRed',
              question: 'Can you open the door?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='ErrorCodePurple'){
            this.setState({
              menu: 'QuestionForm',
              instruction: '',
              window: 'ErrorCodePurple',
              question: 'Can you open the door?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='ErrorCodeWhite'){
            this.setState({
              menu: 'Form',
              window: 'AnnotationNext',
              instruction: 'Bottle sensor is very sensitive to high direct light, and can make the lights state change, there is no problem with it, machine keeps working fine. If you want to solve the blink, change machine orientation to a non-direct light exposition',
              choice1: '',
              choice2: ''
            })
            this.setState({ })
          }else if(w==='NotBlend'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotBlend',
              instruction: '',
              question: 'Is App paired with the Scent Creator and bottle well placed?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='NotPair'){
            this.setState({
              menu: 'QuestionForm',
              window: 'PairUpdated',
              instruction: '',
              question: 'Did you updated the app recently?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='NoBottleDetected'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotBottleRecognition',
              instruction: 'With app paired and bottle placed...',
              question: 'Scent creator lights in white/violet?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='NotCapsuleRecognition'){
            this.setState({
              menu: 'QuestionForm',
              window: 'CapsuleApp',
              instruction: 'Please, use the app cartridge reader function',
              question: 'App reads cartridge?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='WrongCapsuleName'){
            this.setState({
              menu: 'QuestionForm',
              window: 'CapsuleName',
              instruction: 'Please, use the app cartridge reader function',
              question: 'Cartridge label and the readed value match?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='NotWifiConnect'){
            this.setState({
              menu: 'QuestionForm',
              window: 'ProblemNotSolvedAlbert',
              instruction: 'Be sure you enter wifi credentials properly. Try to connect machine to a stable domestic network',
              question: 'Problem solved?',
              choice1: 'YES',
              choice2: 'NO'
            })
          }else if(w==='NotUpdate'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotUpdate',
              instruction: '',
              question: 'Does not update App or Scent Creator?',
              choice1: 'App',
              choice2: 'Scent Creator'
            })
          }else if(w==='AppHangs'){
            this.addLog('Assign case to', 'Albert')
            this.setState({
              menu: 'AssignTo',
              name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
            })
          }else if(w==='NotIndicateFinish'){
            this.addLog('Assign case to', 'Albert')
            this.setState({
              menu: 'AssignTo',
              name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
            })
          }else if(w==='PartMissing'){
            this.setState({
              window: 'PartMissing'
            })
          }else if(w==='NotReceived'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotReceived',
              instruction: '',
              question: 'How many working days have passed since the purchase order?',
              choice1: 'Less than 5',
              choice2: 'More than 5'
            })
          }else if(w==='BrokenPart'){
            this.setState({
              window: 'BrokenPart'
            })
          break;
          }else if(w==='WrongDelivery'){
            this.setState({
              window: 'WrongDelivery'
            })
          break;
          }
        
        //-------------------------- QUESTION FORM --------------------------
        case 'QuestionForm':
          switch (this.state.window){
            
            case 'ErrorCodeRed':
              for (var key in this.state.information){
                if(this.state.information[key]==='02' || this.state.information[key]==='2'){
                  if(w==='YES'){
                    this.setState({
                      window: 'ErrorCodeRedYes02',
                      instruction: 'Close the door with the carousel aligned (see image) to unblock feeder jam.',
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
                }else{
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
                }
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

            case 'ErrorCodeRedYes02':
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

            case 'AndroidIOS':
              if(w==='Android'){
                this.setState({
                  menu: 'Form',
                  window: 'VersionAnnotation',
                  instruction: 'Make sure you have the latest app version'
                })
              }else{
                this.setState({
                  menu: 'Form',
                  window: 'VersionAnnotation',
                  instruction: 'Make sure you have the latest app version'
                })
              }
              break;
            
            case 'ErrorCodeRedNo':
              if(w==='YES'){
                for (var key in this.state.information){
                  if(this.state.information[key]==='02' || this.state.information[key]==='2'){
                    this.setState({
                      window: 'ErrorCodeRedYes02',
                      instruction: 'Close the door with the carousel aligned (see image) to unblock feeder jam.',
                      question: 'Has the problem been solved?',
                      choice1: 'YES',
                      choice2: 'NO'
                    })
                  }else{
                    this.setState({
                      window: 'ErrorCodeRedYes',
                      instruction: 'Follow the instructions to unblock feeder jam. Then switch off device, wait for 3 seconds, switch on device and wait for 5 seconds',
                      question: 'Has the problem been solved?',
                      choice1: 'YES',
                      choice2: 'NO'
                    })
                  }
                }
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
                  menu: 'MultipleChoice',
                  window: 'ErrorCode',
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
                this.setState({
                  menu: 'QuestionForm',
                  window: 'HowToPair',
                  instruction: 'Please, follow the starting guide instructions to pair the App with the Scent Creator. Be sure to have bluetooth and location permissions activated. Remember to pair always from the pairing menu of the app and not from the mobile settings. Also make sure the scent creator is on and with lights fixed in blue (without blinking)',
                  question: 'Pairing problem solved after instructions?',
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
                    menu: 'MultipleChoice',
                    window: 'ErrorCode',
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

              case 'WAnythingElse':
                if(w==='YES'){
                  this.setState({
                    menu: 'MultipleChoice',
                    window: 'WrongDelivery'
                  })
                }else{
                  this.addLog('Should have received', '');
                  this.setState({
                    menu: 'MultipleChoice',
                    window: 'ShouldReceived'
                  })
                }
                break; 
                
              case 'WrongVolume':
                if(w==='Too much'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: "When the Scent Creator prints a new formula, it calculates the maximum possible volume that can fit in the bottle. But the Scent Creator doesn't know if there's already perfume initially into the bottle. If you make a test and the fill the bottle with a new print, you run the risk of overflowing"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'FinalQuestion',
                    instruction: "It's possible that due to the composition of the selected formula, it is not possible to fill the bottle completely. Please, try to make a formula with only one cartridge and be sure you select the correct perfume volume, if the amount of perfume is correct, the Scent Creator works well",
                    question: 'Problem solved?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break; 

              case 'StaintsBase':
                if(w==='YES'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: "When the Scent Creator prints a new formula, it calculates the maximum possible volume that can fit in the bottle. But the Scent Creator doesn't know if there's already perfume initially into the bottle. If you make a test and the fill the bottle with a new print, you run the risk of overflowing"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;  

              case 'NotBlend':
                if(w==='YES'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'NotBlendYes',
                    instruction: '',
                    question: 'App recognize cartridges inserted in the Scent Creator?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: 'Please, follow the starting guide instructions to pair the App with the Scent Creator. Be sure to have bluetooth and location permissions activated. Remember to pair always from the pairing menu of the app and not from the mobile settings. Also make sure the scent creator is on and with lights fixed in blue (without blinking)',
                    question: 'Pair problem solved after instructions?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break;  

              case 'NotBlendYes':
                if(w==='YES'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'NotBlendYesFormOk',
                    question: 'Have you selected a formula with cartridges inserted in the Scent Creator?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleApp',
                    instruction: 'Please, use the app cartridge reader function',
                    question: 'App reads cartridge?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break;  

              case 'CapsuleApp':
                if(w==='YES'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppYes',
                    instruction: '',
                    question: 'Cartridge name and quantity are correct?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognize',
                    question: 'Dont recognize just one cartridge or all of them?',
                    choice1: 'JUST ONE',
                    choice2: 'ALL'
                  })
                }
                break; 

              case 'CapsuleAppYes':
                if(w==='YES'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognizeAll',
                    question: 'When you insert them into the Scent Creator... Does it make any noise?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }
                break; 

              case 'CapsuleAppNoRecognize':
                if(w==='JUST ONE'){
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognizeAll',
                    question: 'When you insert them into the Scent Creator... Does it make any noise?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break; 

              case 'CapsuleAppNoRecognizeAll':
                if(w==='YES'){
                  this.addLog('Problem', 'Maybe RFID is broken')
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }else{
                  this.addLog('Problem', 'Switch door broken')
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }
                break; 

              case 'NotBlendYesFormOk':
                if(w==='YES'){
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'ProblemNotSolvedAlbert',
                    question: 'Problem solved after select correct formula?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break; 

              case 'ProblemNotSolvedAlbert':
                if(w==='YES'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
                  })
                }
                break;

              case 'NotBottleRecognitionApp':
                if(w==='YES'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
                  })
                }
                break;

              case 'PairUpdated':
                if(w==='YES'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: 'Sometimes, when app is updated, it is necessary to update the the app permissions and make a new pairing with the Scent Cretor. Make sure you have the bluetooth and location permissions enabled. To access to the pairing code, remember to remove the front cover and to pair from the pairing menu of the app and not from the mobile settings. Also make sure the scent creator is on and with lights fixed in blue (without blinking).',
                    question: 'Pairing problem solved after instructions?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: 'Please, follow the starting guide instructions to pair the App with the Scent Creator. Be sure to have bluetooth and location permissions activated. Remember to pair always from the pairing menu of the app and not from the mobile settings. Also make sure the scent creator is on and with lights fixed in blue (without blinking)',
                    question: 'Pairing problem solved after instructions?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break;

              case 'HowToPair':
                if(w==='YES'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
                  })
                }
                break;

              case 'NotBottleRecognition':
                if(w==='YES'){
                  this.setState({
                    window: 'NotBottleRecognitionApp',
                    instruction: 'While white/violet lights in the Scent Creator...',
                    question: 'App recognizes bottle?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }else{
                  this.addLog('Problem', 'Scent Creator sensor dont recognize bottle')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: 'In low light enviroments, bottle sensor can fail. Try to use the Scent Creator in other place, or orient it to other position. Try with other bottle or clean it',
                    question: 'Problem solved?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break;

              case 'CapsuleName':
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

              case 'NotUpdate':
                if(w==='App'){
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Albert, Ask if it is possible to send a short video with the problem to support@thealchemistatelier.com'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'ProblemNotSolvedAlbert',
                    instruction: 'Be sure you enter wifi credentials properly. Try to connect machine to a stable domestic network',
                    question: 'Problem solved?',
                    choice1: 'YES',
                    choice2: 'NO'
                  })
                }
                break;

              case 'NotReceived':
                if(w==='Less than 5'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: 'Our shipments take a maximum of 5 working days to arrive, please keep waiting'
                  })
                }else{
                  this.addLog('Assign case to', 'Raquel')
                  this.setState({
                    menu: 'AssignTo',
                    name: 'Raquel'
                  })
                }
                break;
          }
        
        //-------------------------- QUESTION FORM 3 CHOICE --------------------------
        case 'QuestionForm3Choice':
          switch (this.state.window){
            case 'PerfumeResults':
              if(w==='Smell of perfume result'){
                this.addLog('Assign case to', 'Louise')
                this.setState({
                  menu: 'AssignTo',
                  name: 'Louise'
                })
              }else if(w==='Not right volume'){
                this.setState({
                  menu: 'QuestionForm',
                  window: 'WrongVolume',
                  question: 'Too much or too little?',
                  choice1: 'Too much',
                  choice2: 'Too little'
                })
              }else{
                this.addLog('Assign case to', 'Hugo')
                this.setState({
                  menu: 'AssignTo',
                  name: 'Hugo'
                })
              }
              break;

            case 'Staints':
              if(w==='Basket'){
                this.addLog('Problem', 'Capsule Broken')
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }else if(w==='Capsule'){
                this.addLog('Problem', 'Capsule Broken')
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }else{
                this.setState({
                  menu: 'QuestionForm',
                  window: 'StaintsBase',
                  instruction: '',
                  question: 'Overloading bottle?',
                  choice1: 'YES',
                  choice2: 'NO'
                })
              }
              break;
          }
        default: 
          break;
      }
    }
  }

  //<Redirect exact from="/" to="/Login"/>
  //<p>{JSON.stringify(this.state)}</p>
  render() {
    switch(this.state.menu){
      case 'Form':
        if(this.state.flag===false){
          return(
            <div className="app-holder">
              <Form window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog} addInformation={this.addInformation} instruction={this.state.instruction}/>
              <Img window={this.state.window}/>
              <Version/>
            </div>
          )
        }else{
          return(
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div className="app-holder">
                <Form window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog} addInformation={this.addInformation} instruction={this.state.instruction}/>
                <Img window={this.state.window}/>
              </div>
              <Back back={this.back}/>
              <Version/>
            </div>
          )
        }
      
      case 'KindOfProblem':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="app-holder">
                <KindOfProblem window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
            </div>
            <Version/>
          </div>
        )
      
      case 'MultipleChoice':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="app-holder">
                <MultipleChoice window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
            </div>
            <Back back={this.back}/>
            <Version/>
          </div>
        )

      case 'QuestionForm':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="app-holder">
              <QForm instruction={this.state.instruction} question={this.state.question} choice1={this.state.choice1} choice2={this.state.choice2} window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
              <Img window={this.state.window}/>
          </div>
          <Back back={this.back}/>
          <Version/>
          </div>  
        )

      case 'QuestionForm3Choice':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className="app-holder">
                <QForm3Choice instruction={this.state.instruction} question={this.state.question} choice1={this.state.choice1} choice2={this.state.choice2} choice3={this.state.choice3} window={this.state.window} changeWindow={this.changeWindow} addLog={this.addLog}/>
                <Img window={this.state.window}/>
            </div>
            <Back back={this.back}/>
            <Version/>
          </div>        
        )

      case 'AssignTo':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="app-holder">
              <AssignTo data={this.state.data} information={this.state.information} addLog={this.addLog} name={this.state.name}/>
              <Img window={this.state.menu}/>
          </div>
          <Back back={this.back}/>
          <Version/>
          </div>  
        )

      case 'ProblemSolved':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="app-holder">
              <ProblemSolved data={this.state.data} information={this.state.information} addLog={this.addLog}/>
              <Img window={this.state.menu}/>
          </div>
          <Back back={this.back}/>
          <Version/>
          </div>  
        )
      
      case 'ProblemNotSolved':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="app-holder">
            <ProblemNotSolved window='ProblemNotSolved' data={this.state.data} information={this.state.information} addLog={this.addLog}/>
            <Img window='ProblemNotSolved'/>
          </div>
          <Back back={this.back}/>
          <Version/>
          </div>  
        )

      case 'Other':
        return(
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div className="app-holder">
            <OtherQ data={this.state.data} information={this.state.information} addLog={this.addLog}/>
            <Img window='ProblemNotSolved'/>
          </div>
          <Back back={this.back}/>
          <Version/>
          </div>  
        )
    }
  }
}

export default AppEN;
