import React, {Component} from 'react';

import '../css/form/form.css';

export default class Form extends Component {

    constructor(props, context){
        super(props, context);
        this.focusInput = this.focusInput.bind(this);
        this.labelClass = "label";
    }

    //Functions
    validateInputs = function(){
        var form = document.form_register;
        this.elements = form.elements;
        this.validate = 0;
        for (var i=0; i<this.elements.length; i++){
            if (this.elements[i].type=="text" || this.elements[i].type=="email" || this.elements[i].type=="password"){
                if (this.elements[i].value==0){
                    console.log(this.elements[i].name + " isn't complete");
                    if(this.elements[i].className!="error"){
                        this.elements[i].className = this.elements[i].className + "error"
                    }
                }else{
                    this.elements[i].className = this.elements[i].className.replace("error", "")
                    this.validate++;
                }
            };
        };

        if (this.elements.password.value != this.elements.password2.value){
            this.elements.password.value = "";
            this.elements.password2.value = "";
            if(this.elements.password.className!="error"){
                this.elements.password.className = this.elements.password.className + "error";
            }
            if(this.elements.password2.className!="error"){
                this.elements.password2.className = this.elements.password2.className + "error";
            }
            return false;

        }else if(this.elements.password.value != 0){
            this.elements.password.className = this.elements.password.className.replace("error", "");
            this.elements.password2.className = this.elements.password2.className.replace("error", "");
        }

        if(this.validate==this.elements.length/2){
            return true;
        }
        return false
    }

    validateRadios = function(){
        var options = document.getElementsByName("gender");
        var result = false;

        for (var i=0; i<this.elements.length; i++){
            if (this.elements[i].type=="radio" && this.elements[i].name=="gender"){
                for (var j=0; j<options.length; j++){
                    if (options[j].checked){
                        result = true;
                        break;
                    }
                }
                if (result==false){
                    this.elements[i].parentNode.className = this.elements[i].parentNode.className + " error";
                    console.log("gender field isn't completed");
                    return false;
                } else {
                    this.elements[i].parentNode.className = this.elements[i].parentNode.className.replace(" error", "");
                    return true;
                }
            }
        }
    } 

    validateCheckbox = function(){
        var options = document.getElementsByName("terms");
        var result = false;

        for (var i=0; i<this.elements.length; i++){
            if (this.elements[i].type=="checkbox"){
                for (var j=0; j<options.length; j++){
                    if (options[j].checked){
                        result = true;
                        break;
                    };
                };
                if (result==false){
                    this.elements[i].parentNode.className = this.elements[i].parentNode.className + " error";
                    console.log("please, accept terms and conditions");
                    return false;
                } else {
                    this.elements[i].parentNode.className = this.elements[i].parentNode.className.replace(" error", "");
                    return true;
                };
            };
        };
    };

    send = function(e){
        if (!this.validateInputs()){
            console.log("Inputs haven't been validated");
            e.preventDefault();
        };
        if(!this.validateRadios()){
            console.log("Radios haven't been validated");
            e.preventDefault();
        };
        if(!this.validateCheckbox()){
            console.log("Checkbox haven't been validated");
            e.preventDefault();
        } else {
            console.log("send data");
            e.preventDefault();
        };
    };

    focusInput = function(){
        console.log("dentro");
        //this.parentElement.className = "label active";
        //this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
        this.labelClass = "label active";
    };

    blurInput = function(){
        if (this.value <= 0) {
            this.parentElement.children[1].className = "label";
            this.parentElement.children[0].className = this.parentElement.children[0].className + "error";
        };
    };

    clickInput = function(){
        this.parentElement.className = this.parentElement.className.replace(" error", "");
    };
    
    render(){
        return(
            <div class="form-holder">
                <div class="wrap">
                    <form action="" class="form" name="form_register" method="get">
                        <div>
                            <div class="input-group">
                                <input type="text" id="user" name="user" onFocus={this.focusInput.bind(this)} onBlur={e=>this.blurInput}></input>
                                <label class={this.labelClass} for="user" value="active">User:</label>
                            </div>
                            <div class="input-group">
                                <input type="password" id="password" name="password" onFocus={this.focusInput} onBlur="blurInput"></input>
                                <label class="label" for="password">Password:</label>
                            </div>

                            <input type="button" id="btn-submit" value="Login" onClick="send"></input>
                        </div>
                    </form>
                </div>
            </div>           
        )
    }
}