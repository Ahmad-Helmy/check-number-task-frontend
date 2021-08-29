import React, { Component } from 'react';
import CheckNumberComponent from '../components/CheckNumber';
import Main from '../layouts/Main';

class CheckNumber extends Component {
    state = {  }
    render() { 
        return (
            <Main>
                <CheckNumberComponent />
            </Main>
         );
    }
}
 
export default CheckNumber;