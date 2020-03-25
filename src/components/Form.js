import React, {Component} from 'react';

import '../css/form/form.css';

//Components 
import TextLabel from './form/TextLabel'
import PasswordLabel from './form/PasswordLabel'

export default class Form extends Component {

    constructor(args){
        super(args);
        this.state = {
            data: ''
        }
    }

    render(){
        return(
            <div class="form-holder">
                <div class="wrap">
                    <form action="" class="form" name="form_register" method="get">
                        <div>
                            <TextLabel text={"Username"}/>

                            <PasswordLabel text={"Password"}/>

                            <input type="button" id="btn-submit" value="Login"></input>

                            <p>{JSON.stringify(this.state)}</p>
                        </div>
                    </form>
                </div>
            </div>           
        )
    }
}