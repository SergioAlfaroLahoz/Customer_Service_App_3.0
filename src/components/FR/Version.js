import React, {Component} from 'react';

import '../../css/version/version.css';

export default class Version extends Component {

    constructor(args){
        super(args);
        this.state = {
            version: "v1.05"
        }
    }

    render(){
        return(
            <h4 className="version">{this.state.version}</h4>
        )
    }
}
