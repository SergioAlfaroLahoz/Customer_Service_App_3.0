import React, {Component} from 'react';

import '../../css/form/form.css';

import PdfGenerate from './PdfGenerate';

//Components 
import TextLabel from './form/widgets/TextLabel';
import TextArea from './form/widgets/TextArea';

export default class ProblemNotSolved extends Component {

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
                        <label>Inform: the reported problem has been sent to the technical team and we will contact you very soon with the proposed solution. The SC will be substituted if cannot be fixed remotely.</label>
                        <br/><br/><br/>
                        <TextLabel text={"Customer adress"} addLog={this.props.addLog}/>
                        <TextLabel text={"Customer phone number"} addLog={this.props.addLog}/>
                        <TextLabel text={"Customer availability at home next 5 working days"} addLog={this.props.addLog}/>
                        <TextArea addLog={this.props.addLog} title="Additional Comments"/>
                        <label>Send incidence report to support@thealchemistatelier.com</label>
                        <br/><br/>
                        <PdfGenerate log={this.props.data} info={this.props.information}/>
                    </form>
                </div>
            </div>           
        )
    }
}