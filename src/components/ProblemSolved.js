import React, {Component} from 'react';

import '../css/form/form.css';

import PdfGenerate from './PdfGenerate';

import TextArea from './form/widgets/TextArea';

export default class ProblemSolved extends Component {

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
