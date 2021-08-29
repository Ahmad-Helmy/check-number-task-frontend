import React from 'react';
import Form from '../layouts/Form';
import { login } from '../services/user.service';

class LoginComponent extends Form {
    state = { 
        data:{
            email:'',
            password:'', 
        },
        error:{
            email:'',
            password:'', 
        },
        schema:{
            email:[
                this.required(),
                this.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'you have to write a valid email')
            ],
            password:[
                this.required(),
                this.min(8),
                this.max(64),
                this.pattern(/(?=.*?[A-Z])/,"At least one upper case"),
                this.pattern(/(?=.*?[a-z])/,"At least one lower case"),
                this.pattern(/(?=.*?[0-9])/,"At least one number"),
                this.pattern(/(?=.*?[#?!@$%^&*-])/,"At least one special character"),
            ], 
        }
    }
    handleSubmit =async (e)=>{
        e.preventDefault()
        const isValid = this.validateForm()
        if (isValid) {
            try {
                await login(this.state.data)
                this.props.history.push('/');
            } catch (error) {
                console.log(error);
            }
        }
    }
    render() { 
        const {email,password} = this.state.data
        const {email:eEmail,password:ePassword} = this.state.error
        return ( 
            <form >
                <div className="row">
                    <div className="col-8 offset-2">
                        {this.renderInput('Email',email,'email',eEmail)}
                        {this.renderInput('Password',password,'password',ePassword,'password')}
                        {this.renderSubmitButton('Submit',this.handleSubmit)}
                    </div>
                </div>
            </form>
         );
    }
}
 
export default LoginComponent ;