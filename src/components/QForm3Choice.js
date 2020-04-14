import React, {Component} from 'react';

import '../css/form/qform3.css';

export default class QForm3Choice extends Component {

    constructor(args){
        super(args);
        this.changeWindowChoice1 = this.changeWindowChoice1.bind(this);
        this.changeWindowChoice2 = this.changeWindowChoice2.bind(this);
        this.changeWindowChoice3 = this.changeWindowChoice3.bind(this);
        this.state = {
            instruction: this.props.instruction,
            question: this.props.question,
            choice1: this.props.choice1,
            choice2: this.props.choice2,
            choice3: this.props.choice3
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

    changeWindowChoice3(){
        this.props.addLog(this.props.question, this.props.choice3);
        this.props.changeWindow(this.props.choice3);
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
                        <div className="button3">
                            <input type="button" className="Choice3" id="btn-submit1" value={this.props.choice1} onClick={this.changeWindowChoice1}/>
                            <br/>
                            <input type="button" className="Choice3" id="btn-submit2" value={this.props.choice2} onClick={this.changeWindowChoice2}/>
                            <br/>
                            <input type="button" className="Choice3" id="btn-submit3" value={this.props.choice3} onClick={this.changeWindowChoice3}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
