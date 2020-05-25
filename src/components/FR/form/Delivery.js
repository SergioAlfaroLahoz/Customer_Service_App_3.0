import React, {Component} from 'react';

import '../../../css/form/form.css';

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
                        <TextLabel text={"Numéro de suivi"} addLog={this.props.addLog}/>
                        <TextLabel text={"Date de la commande"} addLog={this.props.addLog}/>
                        <input type="button" id="btn-submit" value="Suivant" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}