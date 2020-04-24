import React, {Component} from 'react';

import '../css/menu/menu.css';

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
                    <h1>Which is your need?</h1>
                    <br/><br/>
                    <div className="images-holder">

                        <ImageButton name='ErrorCode' image={images.ErrorCode} label="Scent Creator lights error" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                        
                        <ImageButton name='App' image={images.App} label="App" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='NotWorking' image={images.NotWorking} label="Not Working" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Noise' image={images.Noise} label="Noise in the Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='DoorProblems' image={images.DoorProblems} label="Door Problems" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Delivery' image={images.Delivery} label="Delivery Problems" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Smells' image={images.Smells} label="Smells in the Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                    
                        <ImageButton name='PerfumeResults' image={images.PerfumeResults} label="Perfume Results" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>
                    
                        <ImageButton name='Staints' image={images.Staints} label="Leakage / Staints / Drops" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                        <ImageButton name='Other' image={images.Other} label="Other" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Kind of problem"/>

                    </div>
                </div>
            </div>
        )
    }
}