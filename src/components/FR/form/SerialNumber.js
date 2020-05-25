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
                        <TextLabel text={"Numéro de série du Scent Creator"} addLog={this.props.addLog} className="2" id="2"/>
                        <input type="button" id="btn-submit" value="Suivant" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}