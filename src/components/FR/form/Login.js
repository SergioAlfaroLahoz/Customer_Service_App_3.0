import React, {Component} from 'react';

import '../../../css/form/form.css';

//Components 
import TextLabel from './widgets/TextLabel'
import PasswordLabel from './widgets/PasswordLabel'

export default class Login extends Component {

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
                        <TextLabel text={"Nom d'utilisateur"} addLog={this.props.addLog} ref={this.child}/>
                        <PasswordLabel text={"Mot de passe"} addLog={this.props.addLog}/>
                        <input type="button" id="btn-submit" value="S'identifier" onClick={this.props.changeWindow}/>
                    </form>
                </div>
            </div>           
        )
    }
}