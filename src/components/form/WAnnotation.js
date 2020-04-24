import React, {Component} from 'react';

import '../../css/form/form.css';

//Components 
import TextArea from './widgets/TextArea'

export default class WAnnotation extends Component {

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
                        <TextArea addLog={this.props.addLog} title="Annotations (Wrong)"/>
                        <input type="button" id="btn-submit" value="Next" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}