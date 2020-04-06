import React, {Component} from 'react';

import '../../../css/form/form.css';

export default class EmailLabel extends Component {

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
        this.classes = {
            label: 'label'
        }
    }

    addLog(){
        this.props.addLog(this.props.text, this.state.input);
    }

    //e.target.name devuelve el 'name' de el widget (label)
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFocus(e){
        this.classes.label = 'label active'
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onBlur(e){
        if (this.state.input===''){
            this.classes.label = 'label'
        }
        this.setState({
            [e.target.name]: e.target.value
        })
        this.addLog();
    }
    
    setFocus() {
        this.textInput.current.focus();
    }

    render(){
        return(
            <div className="input-group">
                <input type="email" ref={this.textInput} id="input" name="input" value={this.state.input} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
                <label className={this.classes.label} htmlFor={this.textInput} onClick={this.setFocus}>{this.props.text}</label>
            </div>
        )
    }
}