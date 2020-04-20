import React, {Component} from 'react';

import '../css/form/qform.css';

export default class QForm extends Component {

    constructor(args){
        super(args);
        this.changeWindowChoice1 = this.changeWindowChoice1.bind(this);
        this.changeWindowChoice2 = this.changeWindowChoice2.bind(this);
        this.changeWindowOther = this.changeWindowOther.bind(this);
        this.state = {
            instruction: this.props.instruction,
            question: this.props.question,
            choice1: this.props.choice1,
            choice2: this.props.choice2,
        }
    }

    changeWindowChoice1(){
        this.props.addLog(this.props.question, this.props.choice1);
        this.props.changeWindow(this.props.choice1);
    }

    changeWindowChoice2(){
        this.props.addLog(this.props.question, this.props.choice2);
        this.props.changeWindow(this.props.choice2);
    }

    changeWindowOther(){
        this.props.addLog(this.props.question, 'Other');
        this.props.changeWindow('Other');
    }

    render(){
        return(
            <div className="form-holder">
                <div className="wrap">
                    <form action="" className="form" name="form_register" method="get">
                        <label>{this.props.instruction}</label>
                        <br/><br/>
                        <label>{this.props.question}</label>
                        <br/><br/>
                        <div>
                            <input type="button" id="btn-submit1" value={this.props.choice1} onClick={this.changeWindowChoice1}/>
                            <input type="button" id="btn-submit2" value={this.props.choice2} onClick={this.changeWindowChoice2}/>
                        </div>
                        <br/><br/><br/><br/><br/>
                        <hr/>
                        <input type="button" id="btn-other" value="OTHER" onClick={this.changeWindowOther}/>
                    </form>
                </div>
            </div>
        )
    }
}
