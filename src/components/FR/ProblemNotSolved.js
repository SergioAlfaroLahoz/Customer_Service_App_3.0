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
                        <label>Dire au client que nous échangerons l'appareil contre un nouveau</label>
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