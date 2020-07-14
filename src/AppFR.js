import React, {Component} from 'react';

import './css/app/app.css';

//Components
import Form from './components/FR/Form';
import Img from './components/FR/Img';
import KindOfProblem from './components/FR/KindOfProblem';
import QForm from './components/FR/QForm';
import QForm3Choice from './components/FR/QForm3Choice';
import ProblemSolved from './components/FR/ProblemSolved';
import ProblemNotSolved from './components/FR/ProblemNotSolved';
import MultipleChoice from './components/FR/MultipleChoice';
import AssignTo from './components/FR/AssignTo';
import OtherQ from './components/FR/OtherQ';
import Back from './components/FR/Back'; 
import Version from './components/EN/Version';

class AppFR extends Component {

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
                question: "Autre chose ?",
                choice1: "OUI",
                choice2: "NON"
              })
              break;

            case 'WCartridgeAnnotation':
              this.setState({
                menu: 'QuestionForm',
                window: 'WAnythingElse',
                instruction: '',
                question: "Autre chose ?",
                choice1: "OUI",
                choice2: "NON"
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
              question: "Quel est le système d'exploitation de votre téléphone portable ?",
              choice1: 'Android',
              choice2: 'iOS/Apple'
            })
          }else if(w==='NotWorking'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotWorking',
              question: "Un bruit ou une lumière ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='Noise'){
            this.setState({
              menu: 'QuestionForm',
              window: 'Noise',
              question: "L'appareil fonctionne-t-il ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='Smells'){
            this.setState({
              menu: 'QuestionForm',
              window: 'Smells',
              question: "Quel genre ?",
              choice1: "Odeur de parfum",
              choice2: "Odeur de brûlé"
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
              question: "Quel est le problème ?",
              choice1: "L'odeur du parfum créé",
              choice2: "Quantité de parfum incorrecte",
              choice3: "Réaction allergique"
            })
          }else if(w==='Staints'){
            this.setState({
              menu: 'QuestionForm3Choice',
              window: 'Staints',
              question: "Où ?",
              choice1: "Panier",
              choice2: "Cartouches",
              choice3: "Base de l'appareil"
            })
          }else if(w==='NotCapsuleRecognition'){
            this.setState({
              menu: 'QuestionForm',
              window: 'CapsuleApp',
              instruction: "Veullez utiliser la fonction de lecture de cartouches de l'application",
              question: "L'application lit les cartouches ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }
          break;
        
        //-------------------------- MULTIPLE CHOICE --------------------------
        case 'MultipleChoice':
          if(w==='NotClose'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotClose',
              question: "Fermé avec le panier",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NotOpen'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotOpen',
              question: "Point de pression correcte ?",
              choice1: "OUI",
              choice2: "NON"
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
              question: "Quand l'appareil vibre-t-il ?",
              choice1: "Lorsque le panier tourne",
              choice2: 'Dosing'
            })
          }else if(w==='NotFullyOpen'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotFullyOpen',
              instruction: "Lorsque le système d'ouverture est nouveau, il est un peu dur et il peut se bloquer un peu à la fin. Après un certain temps d'utilisation, cela est plus facile. ",
              question: "S'ouvre en tirant un peu plus fort ?",
              choice1: "OUI",
              choice2: "NON"
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
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='CoverZebrawood'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='CoverDarkTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='CoverTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='PowerCord'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='Manuals'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='Cartridges'){
            this.setState({
              menu: 'Form',
              window: 'CartridgeAnnotation',
              instruction: "Laquelle ?"
            })
          }else if(w==='DiscoveryKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='StartingKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WoodenBottle'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='BottleHolder6'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='BottleHolder3'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='ScentCreator'){
            this.setState({
              menu: 'QuestionForm',
              window: 'AnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
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
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WCoverZebrawood'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WCoverDarkTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WCoverTeak'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WPowerCord'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WManuals'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WCartridges'){
            this.setState({
              menu: 'Form',
              window: 'WCartridgeAnnotation',
              instruction: "Laquelle ?"
            })
          }else if(w==='WDiscoveryKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WStartingKit'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WWoodenBottle'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WBottleHolder6'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WBottleHolder3'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WScentCreator'){
            this.setState({
              menu: 'QuestionForm',
              window: 'WAnythingElse',
              instruction: '',
              question: "Autre chose ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='ErrorCodeRed'){
            this.setState({
              menu: 'QuestionForm',
              instruction: '',
              window: 'ErrorCodeRed',
              question: "Pouvez-vous ouvrir la porte ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='ErrorCodePurple'){
            this.setState({
              menu: 'QuestionForm',
              instruction: '',
              window: 'ErrorCodePurple',
              question: "Pouvez-vous ouvrir la porte ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='ErrorCodeWhite'){
            this.setState({
              menu: 'Form',
              window: 'AnnotationNext',
              instruction: "Le capteur de flacon est très sensible à la lumière directe, et peut faire changer l'état des lumières, il n'y a pas de problème avec cela, la machine continue de fonctionner correctement. Si vous voulez résoudre le problème du clignotement, changez l'orientation de la machine pour une exposition à la lumière non directe",
              choice1: '',
              choice2: ''
            })
            this.setState({ })
          }else if(w==='NotBlend'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotBlend',
              instruction: '',
              question: "L'application est-elle bien synchronisée avec le Scent Creator et le flacon bien positionné ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NotPair'){
            this.setState({
              menu: 'QuestionForm',
              window: 'PairUpdated',
              instruction: '',
              question: "Avez-vous mis à jour l'application récemment ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NoBottleDetected'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotBottleRecognition',
              instruction: "Avec application synchronisée et flacon en place",
              question: "La lumière du Scent Creator est-elle blanche/violette ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NotCapsuleRecognition'){
            this.setState({
              menu: 'QuestionForm',
              window: 'CapsuleApp',
              instruction: "Veuillez utiliser la fonction de lecture des cartouches",
              question: "L'application est-elle capable de lire les cartouches ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='WrongCapsuleName'){
            this.setState({
              menu: 'QuestionForm',
              window: 'CapsuleName',
              instruction: "Veuillez utiliser la fonction de lecture des cartouches",
              question: "L'étiquette présente sur la cartouche correspond-elle au résultat ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NotWifiConnect'){
            this.setState({
              menu: 'QuestionForm',
              window: 'ProblemNotSolvedAlbert',
              instruction: "Assurez-vous de bien ajouter les bons identifiants Wifi et de connecter l'appareil à un réseau avec une bonne connexion",
              question: "Problème résolu ?",
              choice1: "OUI",
              choice2: "NON"
            })
          }else if(w==='NotUpdate'){
            this.setState({
              menu: 'QuestionForm',
              window: 'NotUpdate',
              instruction: '',
              question: "L'application ou le Scent Creator ne se mettent pas à jour ?",
              choice1: "L'application",
              choice2: "Le Scent Creator"
            })
          }else if(w==='AppHangs'){
            this.addLog('Assign case to', 'Albert')
            this.setState({
              menu: 'AssignTo',
              name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
            })
          }else if(w==='NotIndicateFinish'){
            this.addLog('Assign case to', 'Albert')
            this.setState({
              menu: 'AssignTo',
              name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
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
              question: "Combien de jours ouvrés sont passés depuis la date d'achat ?",
              choice1: "Moins de 5",
              choice2: "Plus de 5"
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
              if(w==='OUI'){
                if(this.state.information['Scent Creator KI']==='02' || this.state.information['Scent Creator KI']==='2'){
                  this.setState({
                    window: 'ErrorCodeRedYes02',
                    instruction: "Fermez la porte avec le carrousel aligné (voir image) pour débloquer le blocage.",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    window: 'ErrorCodeRedYes',
                    instruction: "Veuillez suivre les instructions afin de débloquer l'alimentation. Veuillez ensuite éteindre l'appareil, attendre 3 secondes, réallumer l'appareil puis attendre 5 secondes.",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
              }else{
                this.setState({
                  window: 'ErrorCodeRedNo',
                  instruction: "Veuillez éteindre l'appareil, attendre 3 secondes, réallumer l'appareil puis attendre 5 secondes.",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'FinalQuestion':
              if(w==='OUI'){
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
                if(w==='OUI'){
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
                  if(w==='OUI'){
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
                  instruction: "Veuillez vous assurer d'avoir la dernière version de l'application"
                })
              }else{
                this.setState({
                  menu: 'Form',
                  window: 'VersionAnnotation',
                  instruction: "Veuillez vous assurer d'avoir la dernière version de l'application"
                })
              }
              break;
            
            case 'ErrorCodeRedNo':
              if(w==='OUI'){
                if(this.state.information['Scent Creator KI']==='02' || this.state.information['Scent Creator KI']==='2'){
                  this.setState({
                    window: 'ErrorCodeRedYes02',
                    instruction: "Fermez la porte avec le carrousel aligné (voir image) pour débloquer le blocage.",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    window: 'ErrorCodeRedYes',
                    instruction: "Veuillez suivre les instructions afin de débloquer l'alimentation. Veuillez ensuite éteindre l'appareil, attendre 3 secondes, réallumer l'appareil puis attendre 5 secondes.",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
              }else{
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'ErrorCodePurple':
              if(w==='OUI'){
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Veuillez éteindre l'appareil, attendre 3 secondes, réallumer l'appareil puis attendre 5 secondes.",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Veuillez éteindre l'appareil, attendre 3 secondes, réallumer l'appareil puis attendre 5 secondes.",
                  question: "Pouvez-vous ouvrir la porte maintenant ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'NotWorking':
              if(w==='OUI'){
                this.setState({
                  window: 'NotWorkingLights',
                  instruction: '',
                  question: "La lumière est-elle allumée ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }else{
                this.setState({
                  window: 'NotWorkingSwitch',
                  instruction: "Veuillez vous assurer que le câble d'alimentation est correctement branché et que l'appareil est allumé (Instruction dans le guide de démarrage",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;
            
            case 'NotWorkingSwitch':
              if(w==='OUI'){
                this.setState({
                  menu: 'ProblemSolved',
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Essayez de brancher l'appareil à une autre prise ?",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;
            
            case 'NotWorkingLights':
              if(w==='OUI'){
                this.setState({
                  window: 'NotWorkingLightsColour',
                  instruction: '',
                  question: "Couleur de la lumière ?",
                  choice1: "Rouge/Violette",
                  choice2: "Bleu/Blanche"
                })
              }else{
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }
              break;

            case 'NotWorkingLightsColour':
              if(w==='Rouge/Violette'){
                this.setState({
                  menu: 'MultipleChoice',
                  window: 'ErrorCode',
                })
              }else{
                this.setState({
                  window: 'NotWorkingLightsColourBW',
                  question: "Couleur/Code ?",
                  choice1: "BLEU",
                  choice2: "BLANC"
                })
              }
              break;

            case 'NotWorkingLightsColourBW':
              if(w==='BLEU'){
                this.setState({
                  window: 'NotWorkingLightsColourBlue',
                  question: "Pouvez-vous synchroniser votre Scent Creator avec l'application ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }else{
                this.setState({
                  window: 'NotWorkingLightsColourWhite',
                  question: "Le Scent Creator peut-il mélanger votre parfum ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;
            
            case 'NotWorkingLightsColourBlue':
              if(w==='OUI'){
                this.setState({
                  window: 'NotWorkingLightsColourBluePaired',
                  instruction: "Synchronisez le Scent Creator avec l'application",
                  question: "La flacon est-il en place ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }else{
                this.setState({
                  menu: 'QuestionForm',
                  window: 'HowToPair',
                  instruction: "Veuillez suivre les instructions du guide de démarrage pour synchroniser l'application avec le Scent Creator. Assurez-vous d'avoir activé les permissions Bluetooth et de localisation. N'oubliez pas de toujours effectuer la synchronisation à partir du menu de synchronisation de l'application et non à partir des paramètres du téléphone portable. Assurez-vous également que le Scent Creator soit allumé et que les lumières soient bleues (sans clignoter)",
                  question: "Problème de synchronisation résolu après instruction ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'NotWorkingLightsColourBluePaired':
              if(w==='OUI'){
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Le capteur ne reconnaît pas le flacon, essayez avec un autre flacon ou nettoyez-le, assurez-vous que le Scent Creator soit dans un environnement bien éclairé",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }else{
                this.setState({
                  window: 'NotWorkingLightsColourBluePairedBottle',
                  instruction: "Insérez le flacon",
                  question: "La lumière est-elle passée au blanc ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'NotWorkingLightsColourBluePairedBottle':
              if(w==='OUI'){
                this.setState({
                  menu: 'ProblemSolved',
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Le capteur ne reconnaît pas le flacon, essayez avec un autre flacon ou nettoyez-le, assurez-vous que le Scent Creator soit dans un environnement bien éclairé",
                  question: "Le problème est-il résolu ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'NotWorkingLightsColourWhite':
              if(w==='OUI'){
                this.setState({
                  menu: 'ProblemSolved'
                })
              }else{
                this.setState({
                  window: 'FinalQuestion',
                  instruction: "Éteignez le Scent Creator, attendez 5 secondes et allumez-le. Fermez de force l'application The Alchemist Atelier puis ouvrez-la à nouveau. Assurez-vous que les cartouches présentes dans le Scent Creator aient une quantité de parfum suffisante. Essayez de vous reconnecter et de mélanger une nouvelle formule.",
                  question: "Est-ce que le Scent Creator mélange la formule ?",
                  choice1: "OUI",
                  choice2: "NON"
                })
              }
              break;

            case 'Noise':
              if(w==='OUI'){
                this.setState({
                  window: 'NoiseWorks',
                  question: "À quel moment le bruit apparaît-il ?",
                  choice1: "Au moment du mélange",
                  choice2: "En continu"
                })
              }else{
                this.setState({
                  window: 'NoiseNotWorks',
                  question: "À quel moment le bruit apparaît-il ?",
                  choice1: "Au moment d'allumer l'appareil",
                  choice2: "Autre"
                })
              }
              break;

              case 'NoiseWorks':
                if(w==='Au moment du mélange'){
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Cela peut être des vibrations ou mouvements de porte crées par le moteur",
                    question: "Le résultat du parfum est correct (Quantité, odeur...)",
                    choice1: "OUI",
                    choice2: 'NO'
                  })
                }else{
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Le câble d'alimentation est-il correctement branché ? Si ce n'est pas le cas, veuillez le brancher à nouveau",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'NoiseNotWorks':
                if(w==="Au moment d'allumer l'appareil"){
                  this.setState({
                    window: 'NoiseNotWorksLights',
                    question: "La lumière est-elle rouge/violette ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;

              case 'NoiseNotWorksLights':
                if(w==='OUI'){
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
                if(w==='Odeur de parfum'){
                  this.setState({
                    window: 'SmellsPerfume',
                    question: "D'où vient l'odeur ?",
                    choice1: "De l'appareil/ des cartouches",
                    choice2: "Des flacons"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;

              case 'SmellsPerfume':
                if(w==="De l'appareil/ des cartouches"){
                  this.setState({
                    menu: 'Form',
                    window: 'Annotation',
                    instruction: "Les cartouches peuvent être endommagées, identifier laquelle ou lesquelles. Informer le client que nous lui feront parvenir de nouvelles cartouches",
                  })
                }else{
                  this.setState({
                    window: 'SmellsPerfumeBottles',
                    instruction: "Veuillez resserrer correctement la pompe (spray) sur le flacon",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'SmellsPerfumeBottles':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.setState({
                    menu: 'Form',
                    window: 'Annotation',
                    instruction: "Identifier le produit défectueux. Informer le client que nous lui en enverront un nouveau"
                  })
                }
                break;
              
              case 'NotClose':
                if(w==='OUI'){
                  this.setState({
                    window: 'NotCloseYes',
                    instruction: '',
                    question: "Cartouches placées correctement dans le panier ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    window: 'NotCloseNo',
                    instruction: '',
                    question: "À quel moment de la fermeture, cela reste-t-il coincé ?",
                    choice1: "DÉBUT",
                    choice2: "FIN"
                  })
                }
                break;
              
              case 'NotCloseYes':
                if(w==='OUI'){
                  this.setState({
                    window: 'NotCloseNo',
                    instruction: '',
                    question: "À quel moment de la fermeture, cela reste-t-il coincé ?",
                    choice1: "DÉBUT",
                    choice2: "FIN"
                  })
                }else{
                  this.setState({
                    window: 'NotCloseYesNo',
                    instruction: "Veuillez insérer les cartouches dans la bonne position",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'NotCloseYesNo':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.setState({
                    window: 'NotCloseNo',
                    instruction: '',
                    question: "À quel moment de la fermeture, cela reste-t-il coincé ?",
                    choice1: "DÉBUT",
                    choice2: "FIN"
                  })
                }
                break;
              
              case 'NotCloseNo':
                if(w==='DÉBUT'){
                  this.addLog('Problem', 'Doser actuator blocked in down position')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Éteindre l'appareil, attendre 3 secondes, allumer l'appareil et attendre 5 secondes",
                    question: "Pouvez-vous fermer la porte maintenant ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.addLog('Problem', 'Push to open broken')
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;

              case 'NotOpen':
                if(w==='OUI'){
                  this.addLog('Problem', 'Doser actuator blocked in down position or push to open broken or back wire blocking')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Éteindre l'appareil, attendre 3 secondes, allumer l'appareil et attendre 5 secondes",
                    question: "Pouvez-vous ouvrir la porte maintenant ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    window: 'NotOpenNo',
                    instruction: "Veuillez suivre les instructions du guide de démarrage afin de savoir comment ouvrir la porte",
                    question: "Pouvez-vous ouvrir la porte maintenant ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'NotOpenNo':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Problem', 'Doser actuator blocked in down position, push to open broken or back wire blocking')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Éteindre l'appareil, attendre 3 secondes, allumer l'appareil et attendre 5 secondes",
                    question: "Pouvez-vous ouvrir la porte maintenant ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;
              
              case 'Vibration':
                if(w==='Basket turning'){
                  this.setState({
                    window: 'Lorsque le panier tourne',
                    instruction: "Il est tout à fait normal que l'appareil vibre lorsqu'il fonctionne",
                    question: "L'appareil lit correctement les cartouches (les cartouches insérées dans le panier sont lues et visibles dans l'application après 15sec) ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Il est tout à fait normal que l'appareil vibre lorsqu'il dose",
                    question: "Le résultat du parfum est correct (odeur, quantité...) ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'VibrationTurn':
                if(w==='OUI'){
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Il est tout à fait normal que l'appareil vibre lorsqu'il dose",
                    question: "Le résultat du parfum est correct (odeur, quantité...) ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;

              case 'NotFullyOpen':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Problem', 'Maybe doser actuator is blocked in down position')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Éteindre l'appareil, attendre 3 secondes, allumer l'appareil et attendre 5 secondes",
                    question: "Pouvez-vous ouvrir la porte maintenant ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;
            
              case 'AnythingElse':
                if(w==='OUI'){
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
                if(w==='OUI'){
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
                if(w==='Trop'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: "Lorsque le Scent Creator imprime une nouvelle formule, il calcule le volume maximum possible qui peut tenir dans le flacon. Mais le Scent Creator ne sait pas s'il y a déjà du parfum dans le flacon au départ. Si vous faites un test et que vous remplissez le flacon avec une nouvelle impression, vous courez le risque que cela déborde"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'FinalQuestion',
                    instruction: "Il est possible qu'en raison de la composition de la formule choisie, il ne soit pas possible de remplir complètement la bouteille. Veuillez tenter de créer une formule avec une seule cartouche et assurez-vous de sélectionner le bon volume de parfum, si la quantité de parfum est correcte, le Scent Creator fonctionne correctement",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break; 

              case 'StaintsBase':
                if(w==='OUI'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: "Lorsque le Scent Creator imprime une nouvelle formule, il calcule le volume maximum possible qui peut tenir dans le flacon. Mais le Scent Creator ne sait pas s'il y a déjà du parfum dans le flacon au départ. Si vous faites un test et que vous remplissez le flacon avec une nouvelle impression, vous courez le risque que cela déborde"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved'
                  })
                }
                break;  

              case 'NotBlend':
                if(w==='OUI'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'NotBlendYes',
                    instruction: '',
                    question: "L'application reconnaît les cartouches chargées dans le Scent Creator ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: "Veuillez suivre les instructions du guide de démarrage pour synchroniser l'application avec le Scent Creator. Assurez-vous d'avoir activé les permissions Bluetooth et de localisation. N'oubliez pas de toujours effectuer la synchronisation à partir du menu de synchronisation de l'application et non à partir des paramètres du téléphone portable. Assurez-vous également que le Scent Creator soit allumé et que les lumières soient bleues (sans clignoter)",
                    question: "Problème de synchronisation résolu après instructions ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;  

              case 'NotBlendYes':
                if(w==='OUI'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'NotBlendYesFormOk',
                    question: "Avez-vous sélectionné une formule avec des cartouches présentes dans le Scent Creator ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleApp',
                    instruction: "Veullez utiliser la fonction de lecture de cartouches de l'application",
                    question: "L'application lit les cartouches ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;  

              case 'CapsuleApp':
                if(w==='OUI'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppYes',
                    instruction: '',
                    question: "Le nom de la cartouche ainsi que la quantité sont correctes ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognize',
                    question: "L'application ne reconnaît pas une cartouche ou toutes les cartouches ?",
                    choice1: "Une seule seulement",
                    choice2: "Toutes"
                  })
                }
                break; 

              case 'CapsuleAppYes':
                if(w==='OUI'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognizeAll',
                    question: "Lorsque vous insérez les cartouches dans le Scent Creator, il y a-t-il un bruit ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }
                break; 

              case 'CapsuleAppNoRecognize':
                if(w==='Une seule seulement'){
                  this.setState({
                    menu: 'ProblemNotSolved',
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'CapsuleAppNoRecognizeAll',
                    instruction: '',
                    question: "Lorsque vous insérez les cartouches dans le Scent Creator, il y a-t-il un bruit ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break; 

              case 'CapsuleAppNoRecognizeAll':
                if(w==='OUI'){
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
                if(w==='OUI'){
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'ProblemNotSolvedAlbert',
                    question: "Problème résolu après avoir sélectionné la bonne formule ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break; 

              case 'ProblemNotSolvedAlbert':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
                  })
                }
                break;

              case 'NotBottleRecognitionApp':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
                  })
                }
                break;

              case 'PairUpdated':
                if(w==='OUI'){
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: "Parfois, lorsque l'application est mise à jour, il est nécessaire de mettre à jour les permissions de l'application et de faire un nouveau couplage avec le Scent Cretor. Assurez-vous d'avoir activé les permissions Bluetooth et de localisation. N'oubliez pas de toujours effectuer la synchronisation à partir du menu de synchronisation de l'application et non à partir des paramètres du téléphone portable. N'oubliez pas de retirer le panneau frontal. Assurez-vous également que le Scent Creator soit allumé et que les lumières soient bleues. (sans clignoter)",
                    question: "Problème de synchronisation résolu après instruction ?",
                    choice1: 'OUI',
                    choice2: 'NON'
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'HowToPair',
                    instruction: "Veuillez suivre les instructions du guide de démarrage afin de synchroniser l'application avec le Scent Creator. Assurez-vous d'avoir activé les permissions Bluetooth et de localisation. N'oubliez pas de toujours effectuer la synchronisation à partir du menu de synchronisation de l'application et non à partir des paramètres du téléphone portable. Assurez-vous également que le Scent Creator soit allumé et que les lumières soient bleues. (sans clignoter)",
                    question: "Problème de synchronisation résolu après instruction ?",
                    choice1: 'OUI',
                    choice2: 'NON'
                  })
                }
                break;

              case 'HowToPair':
                if(w==='OUI'){
                  this.setState({
                    menu: 'ProblemSolved'
                  })
                }else{
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
                  })
                }
                break;

              case 'NotBottleRecognition':
                if(w==='OUI'){
                  this.setState({
                    window: 'NotBottleRecognitionApp',
                    instruction: "La lumière du Scent Creator est blanche/violette...",
                    question: "L'application détecte le flacon ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }else{
                  this.addLog('Problem', 'Scent Creator sensor dont recognize bottle')
                  this.setState({
                    window: 'FinalQuestion',
                    instruction: "Dans les environnements peu éclairés, le capteur de flacon peut ne pas fonctionner. Essayez d'utiliser le Scent Creator dans un autre endroit, ou orientez-le dans une autre direction. Essayez avec un autre flacon ou nettoyez-le",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'CapsuleName':
                if(w==='OUI'){
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
                if(w==="L'application"){
                  this.addLog('Assign case to', 'Albert')
                  this.setState({
                    menu: 'AssignTo',
                    name: "Albert, Demandez s'il est possible d'envoyer une courte vidéo avec le problème à support@thealchemistatelier.com"
                  })
                }else{
                  this.setState({
                    menu: 'QuestionForm',
                    window: 'ProblemNotSolvedAlbert',
                    instruction: "Assurez-vous de bien saisir les identifiants wifi. Essayez de connecter la machine à un réseau domestique stable",
                    question: "Le problème est-il résolu ?",
                    choice1: "OUI",
                    choice2: "NON"
                  })
                }
                break;

              case 'NotReceived':
                if(w==='Moins de 5'){
                  this.setState({
                    menu: 'Form',
                    window: 'AnnotationNext',
                    instruction: "La livraison tarde généralement 5 jours ouvrables pour arriver, veuillez patienter s'il vous plaît."
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
              if(w==="L'odeur du parfum créé"){
                this.addLog('Assign case to', 'Louise')
                this.setState({
                  menu: 'AssignTo',
                  name: 'Louise'
                })
              }else if(w==='Quantité de parfum incorrecte'){
                this.setState({
                  menu: 'QuestionForm',
                  window: 'WrongVolume',
                  question: "Trop ou trop peu ?",
                  choice1: "Trop",
                  choice2: "Trop peu"
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
              if(w==='Panier'){
                this.addLog('Problem', 'Capsule Broken')
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }else if(w==='Cartouches'){
                this.addLog('Problem', 'Capsule Broken')
                this.setState({
                  menu: 'ProblemNotSolved'
                })
              }else{
                this.setState({
                  menu: 'QuestionForm',
                  window: 'StaintsBase',
                  instruction: '',
                  question: "Flacon qui déborde ?",
                  choice1: "OUI",
                  choice2: "NON"
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

export default AppFR;
