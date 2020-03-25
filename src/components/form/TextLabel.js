import React, {Component} from 'react';

import '../../css/form/form.css';

export default class TextLabel extends Component {

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
    }
    
    setFocus() {
        this.textInput.current.focus();
    }

    render(){
        return(
            <div class="input-group">
                <input type="text" ref={this.textInput} id="input" name="input" value={this.state.input} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur}/>
                <label class={this.classes.label} htmlFor="user" onClick={this.setFocus}>{this.props.text}</label>
            </div>
        )
    }
}