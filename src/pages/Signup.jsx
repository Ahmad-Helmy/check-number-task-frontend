import React, { Component } from 'react';
import SignupComponent from '../components/Signup';
import Main from '../layouts/Main';

class Signup extends Component {
    state = {  }
    render() { 
        return ( 
            <Main>
                <SignupComponent history={this.props.history} />
            </Main>
         );
    }
}
 
export default Signup;