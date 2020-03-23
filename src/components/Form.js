import React, {Component} from 'react';

import '../css/form/form.css';

export default class Form extends Component {
    render(){
        return(
            <div class="form-holder">
                <div class="wrap">
                    <form action="" class="form" name="form_register" method="get">
                        <div>
                            <div class="input-group">
                                <input type="text" id="user" name="user"></input>
                                <label class="label" for="user">User:</label>
                            </div>
                            <div class="input-group">
                                <input type="password" id="password" name="password"></input>
                                <label class="label" for="password">Password:</label>
                            </div>

                            <input type="button" id="btn-submit" value="Login"></input>
                        </div>
                    </form>
                </div>
            </div>               
        )
    }
}