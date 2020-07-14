import React, {Component} from 'react';

import '../../css/menu/menu.css';

import images from './styles/Images'

import ImageButton from './form/widgets/ImageButton'

export default class KindOfProblem extends Component {

    constructor(args){
        super(args);
        this.state = {
            
        }
    }

    render(){
        return(
            <div className="holder">
                <div className="frame">
                    <h1>En quoi puis-je vous être utile?</h1>
                    <br/><br/>
                    <div className="images-holder">

                        <ImageButton name='ErrorCode' image={images.ErrorCode} label="Lumières Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                        
                        <ImageButton name='App' image={images.App} label="Application" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='NotWorking' image={images.NotWorking} label="Cela ne fonctionne pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Noise' image={images.Noise} label="Le Scent Creator fait du bruit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='DoorProblems' image={images.DoorProblems} label="Système d'ouverture" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Delivery' image={images.Delivery} label="Problèmes de livraison" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Smells' image={images.Smells} label="Odeurs dans le Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                    
                        <ImageButton name='PerfumeResults' image={images.PerfumeResults} label="Résultats création de parfum" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                    
                        <ImageButton name='Staints' image={images.Staints} label="Fuite / tâche / goutte" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='NotCapsuleRecognition' image={images.NotCapsuleRecognition} label="Ne reconnait pas la capsule" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                    </div>
                </div>
            </div>
        )
    }
}