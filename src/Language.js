import React, {Component} from 'react';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';

import './css/language/language.css';

export default class Language extends Component {

    render(){
        return(
            <div className="language-holder" onClick={this.props.back}>
                <Link to="/EN">
                    <input type="button" id="btn-EN" value="THE ALCHEMIST ATELIER WELCOME"/>
                </Link>
                <Link to="/FR">
                    <input type="button" id="btn-FR" value="THE ALCHEMIST ATELIER BONJOUR"/>
                </Link>
            </div>
        )
    }
}