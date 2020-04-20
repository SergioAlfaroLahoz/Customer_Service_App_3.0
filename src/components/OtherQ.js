import React, {Component} from 'react';

import '../css/form/form.css';

import PdfGenerate from './PdfGenerate';

//Components
import TextLabel from './form/widgets/TextLabel';
import TextArea from './form/widgets/TextArea';

export default class OtherQ extends Component {

    constructor(args){
        super(args);
        this.state = {

        }
    }

    render(){
        return(
            <div className="form-holder">
                <div className="wrap">
                    <form action="" className="form" name="form_register" method="get">
                        <label>This case has not been contemplated in the program, please write down the problem in detail</label>
                        <br/><br/>
                        <TextArea addLog={this.props.addLog} title="Other"/>
                        <TextLabel text={"Customer adress"} addLog={this.props.addLog}/>
                        <TextLabel text={"Customer phone number"} addLog={this.props.addLog}/>
                        <TextLabel text={"Customer availability at home next 5 working days"} addLog={this.props.addLog}/>
                        <br/><br/>
                        <label>Send incidence report to support@thealchemistatelier.com</label>
                        <br/><br/>
                        <label>Thanks for use Customer Service App</label>
                        <br/><br/>
                        <PdfGenerate log={this.props.data}/>
                    </form>
                </div>
            </div>
        )
    }
}