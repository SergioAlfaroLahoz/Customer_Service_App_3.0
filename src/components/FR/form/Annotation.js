import React, {Component} from 'react';

import '../../../css/form/form.css';

//Components 
import TextArea from './widgets/TextArea'

export default class Annotation extends Component {

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
                        <TextArea addLog={this.props.addLog} title="Annotations"/>
                        <input type="button" id="btn-submit" value="Suivant" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}