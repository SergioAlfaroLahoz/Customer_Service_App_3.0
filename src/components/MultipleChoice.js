import React, {Component} from 'react';

import '../css/menu/menu.css';

import images from './styles/Images'

import ImageButton from './form/widgets/ImageButton'

export default class MultipleChoice extends Component {

    constructor(args){
        super(args);
        this.state = {
            
        }
    }

    render(){
        switch(this.props.window){
            case 'DoorProblems':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Which is the problem?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='NotClose' image={images.NotClose} label="Does not close" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='NotOpen' image={images.NotOpen} label="Does not open" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='OpensAlone' image={images.OpensAlone} label="Opens alone" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='Vibration' image={images.Vibration} label="Vibration" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='NotFullyOpen' image={images.NotFullyOpen} label="Does not fully open" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                            </div>
                        </div>
                    </div>
                )

            case 'PartMissing':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Which one?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='Door' image={images.Door} label="Door" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(1)"/>

                                <ImageButton name='PowerCord' image={images.PowerCord} label="Power Cord" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(2)"/>

                                <ImageButton name='Manuals' image={images.Manuals} label="Manuals/Warranty/QSQ" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(3)"/>

                                <ImageButton name='Cartridges' image={images.Cartridge} label="Cartridges" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(4)"/>

                                <ImageButton name='DiscoveryKit' image={images.DiscoveryKit} label="Discovery Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(5)"/>
                                
                                <ImageButton name='StartingKit' image={images.StartingKit} label="Starting Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(6)"/>

                                <ImageButton name='WoodenBottle' image={images.WoodenBottle} label="Wooden Bottle Case" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(7)"/>

                                <ImageButton name='BottleHolder6' image={images.BottleHolder6} label="Bottle Holder x6" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(8)"/>
 
                                <ImageButton name='BottleHolder3' image={images.BottleHolder3} label="Bottle Holder x3" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(9)"/>
 
                                <ImageButton name='ScentCreator' image={images.ScentCreator} label="Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(10)"/>

                            </div>
                        </div>
                    </div>
                )

            case 'PartMissingDoor':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Which cover door?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='CoverOak' image={images.CoverOak} label="Cover Oak" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverZebrawood' image={images.Door} label="Cover Zebrawood" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverDarkTeak' image={images.CoverDarkTeak} label="Cover Dark Teak" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverTeak' image={images.CoverTeak} label="Cover Teak" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                )
            
            case 'ErrorCode':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Colour/Code?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='ErrorCodeRed' image={images.ErrorCodeRed} label="Red" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>

                                    <ImageButton name='ErrorCodePurple' image={images.ErrorCodePurple} label="Purple" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>

                                    <ImageButton name='ErrorCodeWhite' image={images.ErrorCodeWhite} label="Blue/White blinking" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>
                              
                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'AppChoice':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Which is the app Problem?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='NotBlend' image={images.NotBlend} label="Does not Blend" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotPair' image={images.NotPair} label="Not Pairing" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotCapsuleRecognition' image={images.NotCapsuleRecognition} label="Not Capsule Recognition" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NoBottleDetected' image={images.NoBottleDetected} label="No Bottle Detected" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='WrongCapsuleName' image={images.WrongCapsuleName} label="Wrong Capsule Name" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>
                                
                                <ImageButton name='NotWifiConnect' image={images.NotWifiConnect} label="Not Device Wifi Connection" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotUpdate' image={images.NotUpdate} label="App does Not Update" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='AppHangs' image={images.AppHangs} label="App Hangs" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotIndicateFinish' image={images.NotIndicateFinish} label="Not Indicate Finished Blend" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                            </div>
                        </div>
                    </div>
                )

        }
    }
}