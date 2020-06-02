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
                        <label>Informer : le problème rapporté a été envoyé à l'équipe technique et nous reviendrons très rapidement vers vous avec une solution. Dans le cas où le Scent Creator ne pourrait être réparé, nous le remplacerons.</label>
                        <br/><br/><br/>
                        <TextLabel text={"Adresse du client"} addLog={this.props.addLog}/>
                        <TextLabel text={"Numéro de téléphone du client"} addLog={this.props.addLog}/>
                        <TextLabel text={"Disponibilité du client à son domicile dans les 5 jours ouvrés"} addLog={this.props.addLog}/>
                        <TextArea addLog={this.props.addLog} title="Commentaires additionnels"/>
                        <label>Envoyer le rapport à support@thealchemistatelier.com</label>
                        <br/><br/>
                        <PdfGenerate log={this.props.data} info={this.props.information}/>
                    </form>
                </div>
            </div>           
        )
    }
}