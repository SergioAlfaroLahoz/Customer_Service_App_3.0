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
                        <label>Fin de la requête</label>
                        <br/><br/>
                        <label>Informer : le problème rapporté a été envoyé à l'équipe technique et nous reviendrons très rapidement vers vous avec une solution. Dans le cas où le Scent Creator ne pourrait être réparé, nous le remplacerons.</label>
                        <br/><br/>
                        <label>Assigner le cas à {this.props.name}</label>
                        <br/><br/>
                        <label>Envoyer le rapport à support@thealchemistatelier.com</label>
                        <br/><br/>
                        <label>Merci d'avoir utilisé l'Application Service Client</label>
                        <br/><br/>
                        <TextArea addLog={this.props.addLog} title="Commentaires additionnels"/>
                        <PdfGenerate log={this.props.data} info={this.props.information}/>
                    </form>
                </div>
            </div>
        )
    }
}