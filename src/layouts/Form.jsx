import React, { Component } from 'react';

class Form extends Component {
    state = {}
    required=(message='')=>{
        return (data) => !!data ? '' : message || 'this field is required' 
    }
    min=(length,message='')=>{
        return (data) => data.length >= length ? '' : message || `min length is ${length}`
    }
    max=(length,message='')=>{
        return (data) => data.length <= length ? '' : message || `max length is ${length}`
    }
    pattern = (re,message='') =>{
        return (data)=> re.test(data) ? '' : message || "this field doesn't match pattern"
    }
    validateField=(data,schema)=>{
        let error = ''
        for (const validate of schema) {
            error = validate(data)
            if (error) {
                break;
            }
        }
        return error
    }
    validateForm = () =>{
        const data  = this.state.data
        const schema  = this.state.schema
        const error  = {...this.state.error}
        for (const key in data) {
            error[key]=this.validateField(data[key],schema[key])
        }
        this.setState({error})
        return Object.entries(error).every(e=>!e[1])
    }
    handleChange=(e)=>{
        const name = e.target.name
        const data = {...this.state.data}
        const error = {...this.state.error}
        const schema = {...this.state.schema}
        data[name] = e.target.value 
        error[name] = this.validateField(data[name],schema[name])
        this.setState({data,error})
    }
    renderInput=(title,value,name,error,type='text')=>{
        return(
            <div className="form-group" >
                <label htmlFor="username">{title}:</label>
                <input type={type} className="form-control" value={value} name={name}  onChange={this.handleChange} />
                {error && 
                    (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }
            </div>
        )
    }
    renderSubmitButton=(title,submitFunction)=>{
        return(
            <button type="submit" className="btn btn-primary mt-3 w-100" onClick={submitFunction}>{title}</button>
        )
    }
}
 
export default Form;