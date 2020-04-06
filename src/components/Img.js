import React, {Component} from 'react';

import '../css/img/img.css';

//Images
import images from './styles/Images'

export default class Form extends Component {

    render(){
        if(images.hasOwnProperty(this.props.window)){
            return(
                <div className="img-holder">
                    <div className="frame">
                        <img src={images[this.props.window]} alt={this.props.window} className="img"></img>
                    </div>
                </div>
            )
        }else{
            return(<div></div>)
        }

    }
}
