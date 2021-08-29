import React, { Component } from 'react';
import LoginComponent from '../components/Login';
import Main from '../layouts/Main';

class Login extends Component {
    state = {  }
    render() { 
        return (
            <Main>
                <LoginComponent history={this.props.history} />
            </Main> 
         );
    }
}
 
export default Login;