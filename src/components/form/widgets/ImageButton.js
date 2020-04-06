import React, {Component} from 'react';

import '../../../css/menu/menu.css';

export default class ImageButton extends Component {

    constructor(args){
        super(args);
        this.changeWindow = this.changeWindow.bind(this);
        this.state = {
            name: this.props.name
        }
    }

    changeWindow(e){
        this.props.addLog("Kind of problem", this.props.label)
        this.props.changeWindow(this.state.name);
    }

    render(){
        return(
            <div className="button-holder">
                <div name={this.props.name} style={{ textDecoration: 'none' }} onClick={this.changeWindow}>
                    <div className="button" name={this.props.name}>
                        <label for={this.props.name}>{this.props.label}</label>
                        <br/><br/>
                        <img src={this.props.image} alt="" className={this.props.name}/>
                    </div>
                </div>
            </div>                
        )
    }
}