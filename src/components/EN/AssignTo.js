import React, {Component} from 'react';

import '../../css/form/form.css';

import PdfGenerate from './PdfGenerate';

import TextArea from './form/widgets/TextArea';

export default class AssignTo extends Component {

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
                        <label>End of query</label>
                        <br/><br/>
                        <label>Inform: the reported problem has been sent to the technical team and we will contact you very soon with the proposed solution. The SC will be substituted if cannot be fixed remotely.</label>
                        <br/><br/>
                        <label>Assign case to {this.props.name}</label>
                        <br/><br/>
                        <label>Send incidence report to support@thealchemistatelier.com</label>
                        <br/><br/>
                        <label>Thanks for use Customer Service App</label>
                        <br/><br/>
                        <TextArea addLog={this.props.addLog} title="Additional Comments"/>
                        <PdfGenerate log={this.props.data} info={this.props.information}/>
                    </form>
                </div>
            </div>
        )
    }
}