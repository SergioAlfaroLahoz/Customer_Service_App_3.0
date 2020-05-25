import React, {Component} from 'react';

import '../../../css/form/form.css';

//Components 
import TextLabel from './widgets/TextLabel'
import EmailLabel from "./widgets/EmailLabel";

export default class UserInformation extends Component {

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
                        <TextLabel text={"Customer name"} addLog={this.props.addLog}/>
                        <EmailLabel text={"Customer app email"} addLog={this.props.addLog}/>
                        <input type="button" id="btn-submit" value="Next" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}