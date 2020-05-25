import React, {Component} from 'react';

import '../../css/btn/btn.css';

import backImg from '../../img/Back.png'

export default class Back extends Component {

    render(){
        return(
            <div className="btn-back" onClick={this.props.back}>
                <img src={backImg} alt="" className='backImg'/>
            </div>
        )
    }
}

