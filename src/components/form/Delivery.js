import React, {Component} from 'react';

import '../../css/form/form.css';

//Components 
import TextLabel from './widgets/TextLabel'

export default class Delivery extends Component {

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
                        <TextLabel text={"Tracking Number"} addLog={this.props.addLog}/>
                        <TextLabel text={"Order date"} addLog={this.props.addLog}/>
                        <input type="button" id="btn-submit" value="Next" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}