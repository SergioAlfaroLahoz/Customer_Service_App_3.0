import React, {Component} from 'react';

import '../css/form/form.css';

//Forms
import Login from "./form/Login";
import SerialNumber from "./form/SerialNumber";
import UserInformation from './form/UserInformation';
import ProblemNotSolved from './form/ProblemNotSolved';

export default class Form extends Component {

    constructor(args){
        super(args);
        this.state = {
            
        }
    }

    render(){
        switch(this.props.window){
            case 'Login':
                return(
                    <Login changeWindow={this.props.changeWindow} addLog={this.props.addLog}/>
                )
                    
            case 'SerialNumber':
                return(
                    <SerialNumber changeWindow={this.props.changeWindow} addLog={this.props.addLog}/>
                )
    
            case 'UserInformation':
                return(
                    <UserInformation changeWindow={this.props.changeWindow} addLog={this.props.addLog}/>
                )

            case 'ProblemNotSolved':
                return(
                    <ProblemNotSolved data={this.props.data} addLog={this.props.addLog}/>
                )
        }  
    }
}
