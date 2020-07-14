import React, {Component} from 'react';

import '../../../css/form/form.css';

//Components 
import TextLabel from './widgets/TextLabel'

export default class SerialNumber extends Component {

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
                        <TextLabel text={"Machine Serial Number"} addLog={this.props.addLog} className="2" id="2"/>
                        <TextLabel text={"Machine KI"} addLog={this.props.addLog} className="3" id="3"/>
                        <input type="button" id="btn-submit" value="Next" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}