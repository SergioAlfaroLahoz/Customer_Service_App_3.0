import React, {Component} from 'react';

import '../../css/form/form.css';

//Components 
import TextLabel from './widgets/TextLabel'

export default class VersionAnnotation extends Component {

    constructor(args){
        super(args);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="form-holder">
                <div className="wrap">
                    <form action="" className="form" name="form_register" method="get">
                        <label>{this.props.instruction}</label>
                        <br/><br/><br/>
                        <TextLabel text={"App version"} addLog={this.props.addLog}/>
                        <TextLabel text={"Android/iOS version (optional)"} addLog={this.props.addLog}/>
                        <input type="button" id="btn-submit" value="Next" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}