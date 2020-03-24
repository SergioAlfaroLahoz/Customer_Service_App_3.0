import React, {Component} from 'react';

import '../css/img/img.css';

//Images
import SerialNumberLocation from "../img/SerialNumberLocation.png";
import EmailLocation from '../img/EmailLocation.png';

import images from './Images'

export default class Form extends Component {

    render(){
        return(
            <div class="img-holder">
                <div class="frame">
                    <img src={images.EmailLocation} alt="Serial Number Location" class="img"></img>
                </div>
            </div>
        )
    }
}

//<img src={image} alt="Serial Number Location" class="img"></img>