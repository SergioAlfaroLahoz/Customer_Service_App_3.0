import React, {Component} from 'react';

import '../../../../css/form/form.css';

export default class TextArea extends Component {

    constructor(args){
        super(args);
        this.textInput = React.createRef();
        this.setFocus = this.setFocus.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            input: '' 
        }
    }

    addLog(){
        this.props.addLog(this.props.title, this.state.input);
    }

    //e.target.name devuelve el 'name' de el widget (label)
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFocus(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onBlur(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        this.addLog();
    }
    
    setFocus() {
        this.textInput.current.focus();
    }

    clearLabel() {
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div className="input-group">
                <br/>
                <label className="textAreaLabel">{this.props.title}</label>
                <textarea type="text" ref={this.textInput} id="input" name="input" placeholder="Ajoutez ici les commentaires additionnels" value={this.state.input} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
            </div>
        )
    }
}