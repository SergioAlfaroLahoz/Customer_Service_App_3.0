import React, {Component} from 'react';

import '../css/form/form.css';

//Forms
import Login from "./form/Login";
import SerialNumber from "./form/SerialNumber";
import UserInformation from './form/UserInformation';
import Annotation from './form/Annotation';
import WAnnotation from './form/WAnnotation';
import Delivery from "./form/Delivery";
import VersionAnnotation from "./form/VersionAnnotation";

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
            
            case 'Annotation':
                return(
                    <Annotation changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )

            case 'CartridgeAnnotation':
                return(
                    <Annotation changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )

            case 'WCartridgeAnnotation':
                return(
                    <WAnnotation changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )

            case 'VersionAnnotation':
                return(
                    <VersionAnnotation changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )

            case 'TrackingNumber':
                return(
                    <Delivery changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )

            default:
                return(
                    <Annotation changeWindow={this.props.changeWindow} addLog={this.props.addLog} instruction={this.props.instruction}/>
                )
        }  
    }
}
