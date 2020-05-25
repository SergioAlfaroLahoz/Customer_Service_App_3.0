import React, {Component} from 'react';

import '../../css/menu/menu.css';

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
                            <h1>Quel est le problème?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='NotClose' image={images.NotClose} label="Ne ferme pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='NotOpen' image={images.NotOpen} label="Ne s'ouvre pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='OpensAlone' image={images.OpensAlone} label="S'ouvre tout seul" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='Vibration' image={images.Vibration} label="Vibre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='NotFullyOpen' image={images.NotFullyOpen} label="Ne s'ouvre pas complètement" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the problem?"/>

                            </div>
                        </div>
                    </div>
                )

            case 'PartMissing':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Laquelle?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='Door' image={images.Door} label="Porte" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(1)"/>

                                <ImageButton name='PowerCord' image={images.PowerCord} label="Câble de l'alimentation" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(2)"/>

                                <ImageButton name='Manuals' image={images.Manuals} label="Manuel/Garantie/GuideDeMiseEnRoute" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(3)"/>

                                <ImageButton name='Cartridges' image={images.Cartridge} label="Cartouches" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(4)"/>

                                <ImageButton name='DiscoveryKit' image={images.DiscoveryKit} label="Discovery Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(5)"/>
                                
                                <ImageButton name='StartingKit' image={images.StartingKit} label="Starting Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(6)"/>

                                <ImageButton name='WoodenBottle' image={images.WoodenBottle} label="Écrin de voyage" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(7)"/>

                                <ImageButton name='BottleHolder6' image={images.BottleHolder6} label="Porte-flacons x6" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(8)"/>
 
                                <ImageButton name='BottleHolder3' image={images.BottleHolder3} label="Porte-flacons x3" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(9)"/>
 
                                <ImageButton name='ScentCreator' image={images.ScentCreator} label="Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(10)"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(11)"/>

                            </div>
                        </div>
                    </div>
                )

            case 'BrokenPart':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Laquelle ?</h1>
                            <br/><br/>
                            <h2>Veuillez prendre une photo et l'envoyer à support@thealchemistatelier.com</h2>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='Door' image={images.Door} label="Porte" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(1)"/>

                                <ImageButton name='PowerCord' image={images.PowerCord} label="Câble de l'alimentation" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(2)"/>

                                <ImageButton name='Manuals' image={images.Manuals} label="Manuel/Garantie/GuideDeMiseEnRoute" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(3)"/>

                                <ImageButton name='Cartridges' image={images.Cartridge} label="Cartouches" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(4)"/>

                                <ImageButton name='DiscoveryKit' image={images.DiscoveryKit} label="Discovery Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(5)"/>
                                
                                <ImageButton name='StartingKit' image={images.StartingKit} label="Starting Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(6)"/>

                                <ImageButton name='WoodenBottle' image={images.WoodenBottle} label="Écrin de voyage" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(7)"/>

                                <ImageButton name='BottleHolder6' image={images.BottleHolder6} label="Porte-flacons x6" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(8)"/>
    
                                <ImageButton name='BottleHolder3' image={images.BottleHolder3} label="Porte-flacons x3" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(9)"/>
    
                                <ImageButton name='ScentCreator' image={images.ScentCreator} label="Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(10)"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(11)"/>

                            </div>
                        </div>
                    </div>
                )

            case 'ShouldReceived':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Que devriez-vous avoir reçu ?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='Door' image={images.Door} label="Porte" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(1)"/>

                                <ImageButton name='PowerCord' image={images.PowerCord} label="Câble de l'alimentation" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(2)"/>

                                <ImageButton name='Manuals' image={images.Manuals} label="Manuel/Garantie/GuideDeMiseEnRoute" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(3)"/>

                                <ImageButton name='Cartridges' image={images.Cartridge} label="Cartouches" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(4)"/>

                                <ImageButton name='DiscoveryKit' image={images.DiscoveryKit} label="Discovery Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(5)"/>
                                
                                <ImageButton name='StartingKit' image={images.StartingKit} label="Starting Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(6)"/>

                                <ImageButton name='WoodenBottle' image={images.WoodenBottle} label="Écrin de voyage" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(7)"/>

                                <ImageButton name='BottleHolder6' image={images.BottleHolder6} label="Porte-flacons x6" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(8)"/>
    
                                <ImageButton name='BottleHolder3' image={images.BottleHolder3} label="Porte-flacons x3" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(9)"/>
    
                                <ImageButton name='ScentCreator' image={images.ScentCreator} label="Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(10)"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(11)"/>

                            </div>
                        </div>
                    </div>
                )

            case 'WrongDelivery':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Qu'avez-vous reçu ?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='WDoor' image={images.Door} label="Porte" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W1)"/>

                                <ImageButton name='WPowerCord' image={images.PowerCord} label="Câble de l'alimentation" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W2)"/>

                                <ImageButton name='WManuals' image={images.Manuals} label="Manuel/Garantie/GuideDeMiseEnRoute" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W3)"/>

                                <ImageButton name='WCartridges' image={images.Cartridge} label="Cartouches" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W4)"/>

                                <ImageButton name='WDiscoveryKit' image={images.DiscoveryKit} label="Discovery Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W5)"/>
                                
                                <ImageButton name='WStartingKit' image={images.StartingKit} label="Starting Kit" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W6)"/>

                                <ImageButton name='WWoodenBottle' image={images.WoodenBottle} label="Écrin de voyage" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W7)"/>

                                <ImageButton name='WBottleHolder6' image={images.BottleHolder6} label="Porte-flacons x6" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W8)"/>
    
                                <ImageButton name='WBottleHolder3' image={images.BottleHolder3} label="Porte-flacons x3" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W9)"/>
    
                                <ImageButton name='WScentCreator' image={images.ScentCreator} label="Scent Creator" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W10)"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which one?(W11)"/>

                            </div>
                        </div>
                    </div>
                )

            case 'PartMissingDoor':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Quel panneau frontal ?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='CoverOak' image={images.CoverOak} label="Panel Frontal Chêne" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverZebrawood' image={images.Door} label="Panel Frontal Bois de Zébre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverDarkTeak' image={images.CoverDarkTeak} label="Panel Frontal Teck Foncé" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                    <ImageButton name='CoverTeak' image={images.CoverTeak} label="Panel Frontal Teck" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>
                                
                                    <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door?"/>

                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'WPartMissingDoor':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Quel panneau frontal ?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='WCoverOak' image={images.CoverOak} label="Panel Frontal Chêne" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door (W)?"/>

                                    <ImageButton name='WCoverZebrawood' image={images.Door} label="Panel Frontal Bois de Zébre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door (W)?"/>

                                    <ImageButton name='WCoverDarkTeak' image={images.CoverDarkTeak} label="Panel Frontal Teck Foncé" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door (W)?"/>

                                    <ImageButton name='WCoverTeak' image={images.CoverTeak} label="Panel Frontal Teck" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door (W)?"/>
                                
                                    <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which cover door (W)?"/>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            
            case 'ErrorCode':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Code couleur?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='ErrorCodeRed' image={images.ErrorCodeRed} label="Rouge" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>

                                    <ImageButton name='ErrorCodePurple' image={images.ErrorCodePurple} label="Violet" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>

                                    <ImageButton name='ErrorCodeWhite' image={images.ErrorCodeWhite} label="Bleu/Blanc clignotant" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>
                              
                                    <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Colour/Code?"/>

                                </div>
                            </div>
                        </div>
                    </div>
                )

            case 'AppChoice':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Quel est le problème relatif à l'application ?</h1>
                            <br/><br/>
                            <div className="images-holder">

                                <ImageButton name='NotBlend' image={images.NotBlend} label="Ne mélange pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotPair' image={images.NotPair} label="Ne se synchronise pas avec le Smartphone" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotCapsuleRecognition' image={images.NotCapsuleRecognition} label="Ne reconnait pas la capsule" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NoBottleDetected' image={images.NoBottleDetected} label="Aucun flacon détecté" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='WrongCapsuleName' image={images.WrongCapsuleName} label="Nom de la capsule incorrect" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>
                                
                                <ImageButton name='NotWifiConnect' image={images.NotWifiConnect} label="L'appareil ne se connecte pas en wifi" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotUpdate' image={images.NotUpdate} label="L'application ne se met pas à jour" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='AppHangs' image={images.AppHangs} label="L'application ne charge pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='NotIndicateFinish' image={images.NotIndicateFinish} label="N'indique pas quand le mélange est fini" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                            </div>
                        </div>
                    </div>
                )

            case 'Delivery':
                return(
                    <div className="holder">
                        <div className="frame">
                            <h1>Problèmes relatifs à la livraison ?</h1>
                            <br/><br/>
                            <div className="images-holder">
                                <div>

                                    <ImageButton name='NotReceived' image={images.NotReceived} label="N'a pas encore reçu le colis" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Delivery Problem?"/>

                                    <ImageButton name='PartMissing' image={images.PartMissing} label="Partie manquante" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Delivery Problem?"/>

                                    <ImageButton name='BrokenPart' image={images.BrokenPart} label="Partie cassée" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Delivery Problem?"/>
                                
                                    <ImageButton name='WrongDelivery' image={images.WrongDelivery} label="Le colis reçu ne correspond pas" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Delivery Problem?"/>

                                    <ImageButton name='Other' image={images.Other} label="Autre" changeWindow={this.props.changeWindow} addLog={this.props.addLog} title="Which is the app Problem?"/>

                                </div>
                            </div>
                        </div>
                    </div>
                )

        }
    }
}